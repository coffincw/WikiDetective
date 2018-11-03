
var i = 0;
var j = 0;
var k = 0;
var speed = 5;

function opening() {
    var txt = 'The phone on your nightstand rings; you check the clock sitting beside it and see that it’s only 5:45am. You pick up anyway, and realize it’s the Chief of Police. He assures you: “You’re gonna wanna come down to the station and see this.” You’ve got to be kidding me… You arrive and immediately head for the chief’s office. He sighs with relief when he sees you. “Thank god you’re here. We found a body. Well… not a body exactly — more like a skeleton.” Early this morning, some construction workers were at the abandoned lot downtown. The property recently changed hands, so they were installing some piping to prepare for new construction at the site. Their digging unearthed something unexpected — a hand-crafted box made from cedar planks. In it, a skeleton, and three polaroids of a woman who seems to the accompanying victim. The chief says he’s putting you on the case, and that it should take top priority. He suggests you start by looking into the polaroids…  Upon further examination, the photographs are even more disconcerting than they first appeared. The victim is dressed up and posing, but you and the chief are both pretty sure that the victim was already dead when the photo was taken. Yikes. Unable to find any more clues, you decide to head to the station archives. You’d like to consult the resident criminal records specialist and see if anything about the case jogs her memory.You present her with the polaroids, and she takes a few minutes to closely scrutinize them. Finally, she tells you that she thinks she’s found a connection. She believes the photographs share a similar, eerie quality with the famous painting the “Arnolfini Portrait” by Jan van Eyck. She says this similarity may reveal something about the killer’s motivation for taking the photographs. What could the two have in common?';
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
    if(x === "6130040"){
        document.getElementById('incorrect').innerText = "";
        post_puzzle_1();

    }
    else{
        post_puzzle_1_inc();
    }
} 



function post_puzzle_1() {
    
    var txt = 'Of course! You go to the library to research, finding an entry on the portrait in a book about art history. Based on elements within the painting, some experts believe it may be a memorial portrait. That is to say, both the Arnolfini Portrait and the polaroids founds at the crime scene depict individuals who are already dead. They serve as keepsakes which memorialize the recently deceased. So why would our killer throw their mementos away with the body?';
    if (j < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(j);
      j++;
      setTimeout(post_puzzle_1, speed);
    }
  }


  function post_puzzle_1_inc(txt) {
    
    var txt = 'You’re just not sure that’s the correct answer. You grab a coffee before resuming pondering, determined to find the solution.';
    if (k < txt.length) {
      document.getElementById("incorrect").innerHTML += txt.charAt(k);
      k++;
      setTimeout(post_puzzle_1_inc, speed);
    }
  }


  opening();