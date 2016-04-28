var form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    todo = document.getElementById('planner'),
    options = document.getElementById('options'),
    grocerySection = document.getElementById('grocery'),
    sportSection = document.getElementById('sports'),
    schoolSection = document.getElementById('school'),
    dropdown = document.getElementById('dropdown'),
    dropdown2 = document.getElementById('dropdown2');    

 //This code is for the options for the text decorations.
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  if(dropdown.value == "underline"){
  todo.innerHTML += '<div style="text-align:left;">' + text + '</div>';
  }
  if(dropdown.value == "bold"){
      todo.innerHTML += '<div style="font-weight: bold;">' + text +'</div>';
  }
  if(dropdown.value == "grey"){
      todo.innerHTML += '<div style="color: grey;">' + text +'</div>';
  }
  if(dropdown.value == "red"){
      todo.innerHTML += '<div style="color: red;">' + text +'</div>';
  }
  evt.preventDefault();
}, false);

//this code is for when the user presses on the task they completed it puts a line through it. Representing that they completed this task.
//This code also makes the task that the user put disappear if pressen on twice.
todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  
  if(tar.style.textDecoration === "line-through"){
  tar.parentNode.removeChild(tar);
  } 
  else{
     tar.style.textDecoration = "line-through";
  }
  evt.preventDefault();
}, false)

//This code is for the type of sections of the to do lists. This code wroks as the user chooses a type of category they want.
form.addEventListener('submit', function(evt){

var text = field.value;
if(dropdown2.value == "grocery"){
    grocerySection.innerHTML += '<p>' + text + '</p>'; 
}
else if(dropdown2.value == "sports"){
    sportSection.innerHTML += '<p>' + text + '</p>';
}
else if(dropdown2.value == "school"){
    schoolSection.innerHTML += '<p>' + text + '</p>';
}
  evt.preventDefault();
}, false);

//This code is to cross out the task that the users put and make it dissapear in when clicked twice.
grocerySection.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  
  if(tar.style.textDecoration === "line-through"){
  tar.parentNode.removeChild(tar);
  } 
  else{
     tar.style.textDecoration = "line-through";
  }
  evt.preventDefault();
}, false)
//This is also my code for when you click the subject in your to do list it will dissapear.
schoolSection.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  
  if(tar.style.textDecoration === "line-through"){
  tar.parentNode.removeChild(tar);
  } 
  else{
     tar.style.textDecoration = "line-through";
  }
  evt.preventDefault();
}, false)

//This is also my code for when you click the subject in your to do list it will dissapear.
sportSection.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  
  if(tar.style.textDecoration === "line-through"){
  tar.parentNode.removeChild(tar);
  } 
  else{
     tar.style.textDecoration = "line-through";
  }
  evt.preventDefault();
}, false)