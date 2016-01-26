/*global angular*/

var core = angular.module('modernPraxis.core');

core.service('DataStoreService', ['$http', function($http) {

//  var patients = new PouchDB('patients');
//  var visits = new PouchDB('visits');
  
  this.getPatientById = function(id, cb) {
      $http.get('core/mocks/patient.json').success(function(data) {
        cb(data);
      });
  };
  
  this.getAllPatients = function(cb) {
    
  };
  
  this.getPatientsByName = function(name) {
    
  };
  
  this.savePatient = function(id, data, cb) {
    
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



}]);