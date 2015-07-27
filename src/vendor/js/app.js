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
    ['calendar.html', 'calendar'],
    ['report.html', 'report']];

var promises = [];

for (var i = 0; i < templates.length; i++) {
    promises.push(loadTemplate(templates[i][0], templates[i][1]));
}

var app = {};

var counter = 1;




$.when.apply($, promises).then(function() {
   
    app.Router = new Router();
    Backbone.history.start();
    
    $("#search-field").on('keyup', function() {
        if(counter == 1) {
            $('#dropdown-search').dropdown('toggle');    
        }
        
        counter++;
        $('#search-results').html('Wyniki wyszukiwania dla frazy ' + $(this).val());
    }).on('hide.bs.dropdown', function() {
        counter = 1;
    });
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
        "*path": "dashboard"
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
        switchTo('report');
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

if(typeof webkitSpeechRecognition !== undefined) {
    var recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event) { 
      console.log(event); 
    };
    
    recognition.start();    
}

