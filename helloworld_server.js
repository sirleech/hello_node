﻿var fs = require('fs');
var server = require('http').createServer(function(req, response){
  fs.readFile('helloworld.html', function(err, data){
    response.writeHead(200, {'Content-Type':'text/html'});  
    response.write(data);  
    response.end();
  });
});
server.listen(8888);
var nowjs = require("now");
var everyone = nowjs.initialize(server);

everyone.connected(function(){
  console.log("Joined: " + this.now.name);
});


everyone.disconnected(function(){
  console.log("Left: " + this.now.name);
});

everyone.now.distributeMessage = function(message){everyone.now.receiveMessage(this.now.name, message);};
