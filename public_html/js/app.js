/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var templates = [['dashboard.html', 'dashboard'],
    ['navigation_bar.html', 'navigation_bar'],
    ['patient_data.html', 'patient_data'],
    ['search.html', 'search'],
    ['table_list.html', 'table_list'],
    ['calendar.html', 'calendar']];

var promises = [];

for (var i = 0; i < templates.length; i++) {
    promises.push(loadTemplate(templates[i][0], templates[i][1]));
}

var app = {};






$.when.apply($, promises).then(function() {
   
    app.Router = new Router();
    Backbone.history.start();
    
    //switchTo('dashboard');
});


var switchTo = function(container) {
    var containers = ['dashboard', 'table_list', 
        'patient_data',
    'calendar', 'report'];

    for(var i=0; i<containers.length; i++) {
        $('#' + containers[i]).hide();
        //$('#' + containers[i]).removeClass('active');
    }
    
    $('#' + container).show();
    //$('#' + container).addClass('active');
}





var Router = Backbone.Router.extend({
    routes: {
        "help": "help",
        "visit": "visit",
        "patient": "patientIndex",
        "patient/:id": "patientData",
        "calendar": "calendar",
        "report": "report",
        "catalog": "catalog",
        "search/:query": "search",
        "search/:query/p:page": "search",
        "dashboard": "dashboard",
        "*path": "dashboard",
    },
    help: function() {
        switchTo('dashboard');
    },
    search: function(query, page) {
        console.log('Search for sth...');
    },

    patientIndex: function() {
        switchTo('table_list');
    },
    patientData: function() {
        switchTo('patient_data');
    },
    calendar: function() {
        switchTo('calendar');
    },
    report: function() {
        switchTo('table_list');
    },
    catalog: function() {
        switchTo('table_list');
    },
    visit: function() {
        switchTo('patient_data');
    },
    dashboard: function(path) {
        switchTo('dashboard');
    }
});


