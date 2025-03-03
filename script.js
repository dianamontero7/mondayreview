document.querySelector(".button").addEventListener('click', function(){
alert("You clicked on: " + this.textContent);
});

document.querySelectorAll('.button')[1].addEventListener('click', function() {
    alert('You clicked on: ' + this.textContent); 
});
