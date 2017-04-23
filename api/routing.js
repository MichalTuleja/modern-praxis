"use strict";

const express = require("express");

var controllers = require('require-all')({
    dirname     :  __dirname + '/controllers',
    filter      :  /(.+Controller)\.js$/,
    excludeDirs :  /^\.(git|svn)$/,
    recursive   : false
});

function init() {
    var router = express.Router();
    
    // Defaults
    // router.get("/", controllers.GenericController.defaultAction);
    // router.get("/init", controllers.GenericController.initializeDatabase);
    
    // Authentication
//    router.get("/login", controllers.AuthController.checkStatus);
//    router.get("/logoff", controllers.AuthController.logoff);
//    router.post("/login", controllers.AuthController.login);

    // Data 
    router.get("/patients", nocache, controllers.GenericController.listPatients);
    router.get("/patient/:id", nocache, controllers.GenericController.getData);
    // router.put("/patient/:id", c"module": "opthtalmology"ontrollers.GenericController.insertData);
    // router.post("/patient/:id", controllers.GenericController.updateData);
    


    // User management
//    router.get("/users/:id", controllers.UserController.noop);
//    router.put("/users", controllers.UserController.noop);
//    router.post("/users/:id", controllers.UserController.noop);
    
    return router;
}

function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

module.exports = init;