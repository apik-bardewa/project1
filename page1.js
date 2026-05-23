
let boxes=document.querySelectorAll(".box");
let reset=document.getElementById("reset");
let turn0 = true;
//array of winning pattern
const win =[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("btn is clicked!!!");
       if(turn0){
        box.innerHTML="0";
        turn0=false;
       }
       else{
        box.innerHTML="X";
        turn0=true;
       }
      box.disabled=true;
      checkwinner();
    });
});

//after winnig we cannot add extra 0 and x
let disablebox = () => {
    for(box of boxes){
        box.disabled=true;
    }
}

//reset buttin function
reset.addEventListener("click", () => {
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
        document.getElementById("output").innerHTML="";

    }
});

//check for winnig
let checkwinner = () =>{
    for(let pattern of win){
        // console.log(pattern[0], pattern[1], pattern[2]);
       let position1 = boxes[pattern[0]].innerText;
       let position2 = boxes[pattern[1]].innerText;
       let position3 = boxes[pattern[2]].innerText;
       if(position1!="" && position2!="" && position3!=""){
           if(position1==position2 && position2==position3){
            disablebox();
            document.getElementById("output").innerHTML=`👏 Nice Play Congratulation!!.winner is player ${position1} 👏`;
        
           }
       }
    }
}
