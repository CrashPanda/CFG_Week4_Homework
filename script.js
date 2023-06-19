/*
Create a web app that takes input from the user and updates the
web page based on the input.

You should:
+ Get input from the user on a web page
+ Make changes to the HTML and/or CSS using JavaScript
+ Use an event to trigger a change to a web page

Bonus?
+ Add HTML elements to a web page using the DOM
+ Remove HTML elements from a web page using the DOM
+ Research and use other DOM events such as onmouseover
+ Use arrays, loops and/or conditional logic in JavaScript

I'm going to try translating some of the html/css so that they're implemented using Javascript, because too much of this code is taken from https://www.w3schools.com/howto/howto_js_todolist.asp. I'd like to put more of my stamp on it, than just the CSS alterations. But I can't do it this week as I'm heading up to Exeter on Wednesday.

+ Add word count limit to input box

*/

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
