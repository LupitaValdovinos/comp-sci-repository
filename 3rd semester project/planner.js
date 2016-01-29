var form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    todo = document.getElementById('planner'),
    options = document.getElementById('options'),
    grocerySection = document.getElementById('grocery'),
    sportSection = document.getElementById('sports'),
    schoolSection = document.getElementById('school'),
    dropdown = document.getElementById('dropdown'),
    dropdown2 = document.getElementById('dropdown2');    

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