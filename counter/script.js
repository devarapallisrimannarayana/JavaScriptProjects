var num =0;
var increment = ()=>{
    num = num+1;
    if(num<=9){
        document.querySelector("#value").innerText = "0" + num;
    }
    else{
        document.querySelector("#value").innerText = num;
    }
    document.querySelector("#value").style.color = "blue"; 
}
var decrement = ()=>{
    if(num>0){
        num = num-1;
    }
    if((num<=9)){
        document.querySelector("#value").innerText = "0" + num;
    }
    else{
        document.querySelector("#value").innerText = num;
    } 
    document.querySelector("#value").style.color = "red";
}
var reset = ()=>{
    num=0;
    document.querySelector("#value").innerText = num;
    document.querySelector("#value").style.color = "white";
}