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

dashboardModule.controller('CalendarCtrl', ['$scope', '$routeParams', '$location',
    function($scope, $routeParams, $location) {
        $scope.events = [

        ];

        for(var j=0; j<100; j++) {
            if(!(((j+2)%7 == 0) || ((j+1)%7 == 0))) {
                var append = j * 24*3600;
                var someDate = new Date(2015, 9,19,8);
                var refDate = new Date(someDate.getTime() + append * 1000);
                
                for (var i = 0; i < (8*3600); i = i + (30 * 60)) {
                    var startDate = new Date(((refDate.getTime()/1000 | 0) + i) * 1000);
                    var endDate = new Date(((startDate.getTime()/1000 | 0) + (30 * 60)) * 1000);
                    
                    var item = {
                        title: 'Jan Nowak', // The title of the event
                        type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
                        startsAt: startDate, // A javascript date object for when the event starts
                        endsAt: endDate, // Optional - a javascript date object for when the event ends
                        editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
                        deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
                        draggable: true, //Allow an event to be dragged and dropped
                        resizable: true, //Allow an event to be resizable
                        incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
                        recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
                        cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc,
                        url: '/patient/1/summary',
                        patientId: '1',
                        visitId: '1'
                    }
                    
                    $scope.events.push(item);
                }
            }

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
