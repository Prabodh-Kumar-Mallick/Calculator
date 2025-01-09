function Display(num){
    let v = document.getElementById('inp').value
    document.getElementById('inp').value = v+num
}

function CalculateResult(){
    let v = document.getElementById('inp').value
    try{
    document.getElementById('inp').value = eval(v)
}

catch(error)
{
    document.getElementById('inp').value ="Invalid input";
}
}
function Delete(){
    let v = document.getElementById("inp").value
    v = v.slice(0,-1)
    document.getElementById("inp").value = v
}

function Reload(){
    window.location.reload()
}