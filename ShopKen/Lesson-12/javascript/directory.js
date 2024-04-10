
var cards = document.getElementsByClassName("BusinessSpace");
var directory = document.getElementById ("businesses")

var i;

function list() {
  for (i = 0; i < cards.length; i++) {
    cards[i].style.width = "90%";
    directory.style.display = "block";

  }
}

function grid() {
  for (i = 0; i < cards.length; i++) {
    cards[i].style.width = "60%";
    directory.style.display = "grid";
  }
}

