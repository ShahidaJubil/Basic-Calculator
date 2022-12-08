function displaybutton(val){
    document.getElementById("input").value+=val
    document.getElementById("")
}

function clearscreen(){
    document.getElementById("input").value=""
}

function equalClick(){
    var text= document.getElementById("input").value
    var result=eval(text)
    document.getElementById("input").value=result
}