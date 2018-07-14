/*
 * Expfactory.js
 * Helper module for static experiments to submit data to a server, intended
 *        for use with the Experiment Factory Reproducible Containers.
 *        https://expfactory.github.io. For the expfactory server, the header
 *        before the request is expected to have an ajaxSetup that adds the 
 *        csrf_token (and this is handled by the server template)
 *
 * Requires:
 *     jquery
 *   
 */


function Expfactory () {

    this.data = [],

    // getData
    this.getData = function() {
        return this.data;
    }

    // Add data
    this.addData = function(data) {
        this.data.push(data);
    }

    // Submit Data /save
    this.saveData = function() {
        console.log("Saving data...");    

    }

    // Get data for inspection
    this.getData() = function() {
        return this.get('data');
    }

    // Akin to hitting /next
    this.nextEndpoint = function() {
        console.log("Next experiment!");
    }

};
