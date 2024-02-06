// display val
function dis(val){
document.getElementById("result").value += val;
};

//clear
function clr(){
    document.getElementById("result").value = "";
}

//solve
function solve(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    console.log(y)
    document.getElementById("result").value = y;


}