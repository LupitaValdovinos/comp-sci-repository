var form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    todo = document.getElementById('planner'),
    options = document.getElementById('options');
    
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








