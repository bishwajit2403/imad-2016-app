// Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
   // make a request to the counter endpoint
   
   //capture the respone and store it in a variable
   
   //render the variable in the correct spam
   counter = counter + 1;
   var span = documnet.getElementById('count');
   span.innerHTML = counter.toString();
};