/*global angular*/

var dashboardModule = angular.module('dashboardModule', []);

dashboardModule.controller('DashboardCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.events = {
            data: [

            ]
        };

        var refDate = new Date(2015, 9, 19, 8);
        for (var i = 0; i < (8 * 3600); i = i + (30 * 60)) {
            var startDate = new Date(((refDate.getTime() / 1000 | 0) + i) * 1000);
            var endDate = new Date(((startDate.getTime() / 1000 | 0) + (30 * 60)) * 1000);

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

            $scope.events.data.push(item);
        }

        $scope.tiles = [
            [{
                backgroundColor: '#eeeeee',
                icon: 'glyphicon-plus',
                url: '/patient/1/basic_data',
                title: 'Add visit'
            }, {
                backgroundColor: '#eeeeee',
                icon: 'glyphicon-search',
                url: '/calendar',
                title: 'Search'
            }, {
                backgroundColor: '#eeeeee',
                icon: 'glyphicon-calendar',
                url: '/calendar',
                title: 'Calendar'
            }],
            [{
                backgroundColor: '#eeeeee',
                icon: 'glyphicon-inbox',
                url: '/reports',
                title: 'Reports'
            }, {
                backgroundColor: '#eeeeee',
                icon: 'glyphicon-book',
                url: '/dashboard/knowledge_base',
                title: 'Knowledge base'
            }, {
                backgroundColor: '#eeeeee',
                icon: 'glyphicon-cog',
                url: '/calendar',
                title: 'Settings'
            }]
        ];

        $scope.gotoUrl = function(url) {
            $location.path(url);
        };

        $scope.onKeypress = function() {
            console.log('keypress');
        };


        
        
    }
]);
