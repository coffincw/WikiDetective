
var i = 0;
var j = 0;
var speed = 50;

function opening() {
    var txt = 'Body was found under recently demolished building, putting in new piping, worker finds the body with polaroids of the victim Station believes it is related to a string of murders that have been inactive for around 10 years';
        if (i < txt.length) {
            document.getElementById("opening").innerHTML += txt.charAt(i);
            i++;
      setTimeout(opening, speed);
    }
    if(i==txt.length){
        document.getElementById('button1').hidden = '';
        document.getElementById('keyword').type = 'text';
    }
}

function checkAnswer(x){
    if(x === "1"){
        post_puzzle_1();
    }
} 



function post_puzzle_1() {
    
    var txt = 'Lorem ipsum dummy text blabla.';
    if (j < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(j);
      j++;
      setTimeout(post_puzzle_1, speed);
    }
  }


  opening();