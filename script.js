function fade_in(element) {
    var op = 0.005;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

document.addEventListener('click', function() {
    var welcome = document.getElementById('welcome');
    var about = document.getElementById('about');
    var resume = document.getElementById('resume');
    var contact = document.getElementById('contact');
    var transition = document.getElementById('blink');
    
    if (welcome.className != "hidden") {
        welcome.className = "hidden";
        about.className = "";
    } else if (about.className == "") {
        about.className = "hidden";
        resume.className = "";
    } else if (resume.className == "") {
        resume.className = "hidden";
        contact.className = "";
        transition.innerHTML = "&laquo; Click to restart &raquo;";
    } else {
        contact.className = "hidden";
        welcome.className = "";
        transition.innerHTML = "&laquo; Click to continue &raquo;";
    }
    
    fade_in(transition);
});

var transition = document.getElementById('blink');
fade_in(transition);

