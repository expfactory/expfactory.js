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

    // Local save function, will just print to console
    // unless the user writes own function (recommended)
    this.localSave = function(data) {
       var data = data || self.data;
       console.log(data);
       console.log(err);
    };

    // Submit Data /save
    this.saveData = function() {
        console.log("Saving data...");    

        // Serialize the data
        var data = JSON.stringify(this.data);

        $.ajax({ type: "POST",
                 url: '/save',
                 data: { "data": data },
                 success: function(){ this.next(); },
                 dataType: "application/json",
                     
                 // Endpoint not running, local save
                 error: function(err) {

                     if (err.status == 200){ this.next(); } 

                     // Do local save of the data
                     else { this.localSave(data); }

                 });
             })
     }

    // Get data for inspection
    this.getData() = function() {
        return this.get('data');
    }

    // Akin to hitting /next
    this.next = function() {
        console.log("Next experiment!");
        document.location = "/next";
    }

};
