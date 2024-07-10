let result
let randomNum

function headTail(){
    randomNum = Math.floor(Math.random() * 2)

    if(randomNum == 0){
        result = "Head"
    }
    else{
        result = "Tail"
    }
    
    document.getElementById("result").innerText = result
}
