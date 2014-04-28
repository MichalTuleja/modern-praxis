/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var templates = [['dashboard.html', 'dashboard'],
                 ['navigation_bar.html', 'navigation_bar'],
                 ['patient_data.html', 'patient_data'],
                 ['search.html', 'search'],
                 ['table_list.html', 'table_list']];

var promises = [];

for(var i=0; i<templates.length; i++) {
    promises.push(loadTemplate(templates[i][0], templates[i][1]));
}

$.when.apply($, promises).then(function() {
    $('#bodyContent').text('xD');
});
