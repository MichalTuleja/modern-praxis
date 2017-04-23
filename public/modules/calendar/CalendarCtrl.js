/*global angular, moment*/

var dashboardModule = angular.module('modernPraxis.calendar', ['mwl.calendar']);

dashboardModule.config(function ($routeProvider) {
  $routeProvider
    .when('/calendar/:view', {
      templateUrl: 'modules/calendar/calendar.template.html',
      controller: 'CalendarCtrl'
    })
    .when('/calendar', {
      templateUrl: 'modules/calendar/calendar.template.html',
      controller: 'CalendarCtrl'
    })
});

dashboardModule.controller('CalendarCtrl', ['$scope', '$routeParams', '$location', 'DataStoreService',
  function($scope, $routeParams, $location, dataStore) {

    dataStore.getAllPatients(function(data) {
      $scope.$apply(function() {
        var res = [];
        for(var i in data.rows) {
          var row = data.rows[i];
          for(var j in row.doc.visits) {
            var visit = row.doc.visits[j];
            var startTime = new Date(visit.visitTime);
            var endTime = new Date(startTime.getTime() + (30 * 60 * 1000))
            
            addItem({
              patientId: row.doc._id,
              visitId: visit.id,
              startDate: startTime,
              endDate: endTime,
              title: row.doc.firstName + ' ' + row.doc.lastName
            });
          }
        }
      });
    });
    
    $scope.events = [];
    $scope.addItem = addItem;
    
    function addItem(item) {
      var calendarItem = {
        title: item.title, // The title of the event
        type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
        startsAt: item.startDate, // A javascript date object for when the event starts
        endsAt: item.endDate, // Optional - a javascript date object for when the event ends
        editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
        deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
        draggable: true, //Allow an event to be dragged and dropped
        resizable: true, //Allow an event to be resizable
        incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
        recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
        cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc,
        url: '/patient/' + item.patientId + '/ophtalmology/' + item.visitId,
        patientId: item.patientId,
        visitId: item.visitId
      }
      
      $scope.events.push(calendarItem);
    }

    $scope.calendarDay = new Date();
    $scope.calendarTitle = 'Praxis Calendar';

    switch($routeParams.view) {
      case 'week':
        $scope.calendarView = 'week';
        break;
      case 'month':
        $scope.calendarView = 'month';    
        break;
      case 'year':
        $scope.calendarView = 'year';
        break;
      case 'day':
        $scope.calendarView = 'day';
        break;
      default:
        $scope.calendarView = 'day';
    }

    var doNothing = function() {
      console.log('event');
    };

    $scope.eventClicked = function(event) {
      console.log('Clicked');
      $location.path(event.url);
    };
    
    $scope.eventEdited = doNothing();
    $scope.eventDeleted = doNothing();
    $scope.calendarEvent;

    moment.locale('en', {
      week: {
        dow: 1 // Monday is the first day of the week
      }
    });
  }
]);
