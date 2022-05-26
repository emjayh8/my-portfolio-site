
    //On scrollover of button element, switch style

    var img = document.querySelector('img');
    var start = img.src;
    var hover = img.getAttribute('data-hover'); //specified in img tag

    img.onmouseover = () => { img.src = hover; }
    img.onmouseout = () => { img.src = start; }//to revert back to start
	
	var logo = document.getElementById("logo");

logo.addEventListener("mouseover", function() {
    logo.style.opacity = 0.5;
});

logo.addEventListener("mouseout", function() {
    logo.style.opacity = 1.0;
});

function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("email").value;

  let text;
  if (typeof x === 'string' || x instanceof String) {
    text = "Thank you for subscribing!";
  } else {
    text = "please enter an email";
  }
  document.getElementById("demo").innerHTML = text;
}