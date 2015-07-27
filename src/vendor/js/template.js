var templDir = 'templ/';

var loadTemplate = function(file, elem) {
    return $.get(templDir + file, function(data) {
        $('#' + elem).html(data);
    });
};



