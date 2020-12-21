var pictures= [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqG82xbXoENUlnjOjJNSkZ9zSY8bdVJQRFJA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEs-efovnqndnYqgQiwZroyBd4XBCkxD3NQ&usqp=CAU",
"http://clipart-library.com/images/zTXeRyzec.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe5dYXcRlr6276AuHJXBfQ32aR3_p_9g7mvAW3--qXyZHn4fk&s"
];

var text= [
    "Father",
    "Mother",
    "Me (Daughter)",
    "Son"
];
var i=0;
function nextpic(){
    i=i+1;
  
    document.getElementsById("album").src= pictures[i];
    document.getElementById("display").innerHTML=text[i];
  



    
}
