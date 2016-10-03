// Counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
   // Create a request object
   var request = new XMLHttpRequest();
   
   //capture the respone and store it in a variable
   request.onreadystatuschange = function (){
     if (request.readyState === XMLHttpRequest.DONE )  {
         // Take some actiin
         if (request.status === 200) {
             var counter = request.responceText;
             var span = document.getElementById('count');
            span.innerHTML = counter.toString();
         }
     }
     // Not done yet
   };
   
    // Made the request
    request.open('GET', 'http://bishwajit2403.imad.hasura-app.io/counter', true);
    request.send(null);
};