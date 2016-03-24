/*global angular*/

var core = angular.module('modernPraxis.core');

core.service('DataStoreService', ['$http', function($http) {
  
  var patients = new PouchDB('patients');
  var patientsRemote = new PouchDB('http://localhost:8080/patients');
  
  /*
  This guid should be gahtered from a server with a good random number generator
  But is enough for prototype
  */
  function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
  }

  this.guid = guid;

  this.getPatientById = function(id, cb) {
    if(id === "1") {
      $http.get('core/mocks/patient.json').success(function(data) {
        cb(data);
      });
    }
    else {
      patients.get(id).then(function (doc) {
        console.log(doc);
        cb(doc);
      });
    }
  };
  
  this.getAllPatients = function(cb) {
    patients.allDocs({include_docs: true}).then(function(data) {
      console.log('Found ' + data.total_rows + ' row(s).');
      cb(data);
    }).catch(function (err) {
      console.log(err);
    });
  };
  
  this.getPatientsByName = function(name, cb) {
    
  };
  
  this.newVisit = function(patientId, cb) {
    
  };
  
  this.savePatient = function(id, data, cb) {
    if(id === "1") {
      data._id = guid();
    }

    patients.put(data).then(function (response) {
      console.log(response);
      cb(response);
    }).catch(function (err) {
      console.log(err);
      cb()
    });
  };
  
  this.getIcd9Codes = function() {
    return [
        {code: "01384", short: "Cns TB NEC-cult dx", desc: "Other specified tuberculosis of central nervous system, tubercle bacilli not found (in sputum) by microscopy, but found by bacterial culture"},
        {code: "80316", short: "Cl skull fx NEC-coma NOS", desc: "Other closed skull fracture with cerebral laceration and contusion, with loss of consciousness of unspecified duration"},
      ];
  };
  
  this.getIcd10Codes = function() {
    return [
        {code: "A18.5", desc: "Tuberculosis of eye"},
        {code: "A18.8", desc: "Tuberculosis of other specified organs"}
      ];
  };

  function init() {
    patients.sync(patientsRemote, {
      live: true,
      retry: true
    }).on('change', function (change) {
      console.log('patient changed');
    }).on('paused', function (info) {
      console.log('sync paused');
    }).on('active', function (info) {
      console.log('connection resumed');
    }).on('error', function (err) {
      console.log('Unknown error');
    });
  }
  
  init();

}]);