"use strict";

var HttpStatus = require('http-status-codes');
const DataService = require('../services/DataService');
const ErrorService = require('../services/ErrorService');

const Patient = require('../../sample_patient.json');

var GenericController = {
  defaultAction: unknownAction,
  listPatients: listPatients,
  getData: getData
};

function listPatients(req, res) {
  // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  // res.header('Expires', '-1');
  // res.header('Pragma', 'no-cache');
  res.json([Patient]);
}

function getData(req, res) {
  // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  // res.header('Expires', '-1');
  // res.header('Pragma', 'no-cache');
  res.json(Patient);
}


function unknownAction(req, res) {
  res.json({"Message" : "Undefined action"});    
}

module.exports = GenericController;