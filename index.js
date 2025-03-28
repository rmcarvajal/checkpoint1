const resButton = document.getElementById("resButton")

let res = true
function reservation(){
    if(res === true){
        resButton.innerHTML=`
        reservado
        `
        return res = false
    }
    else if(res === false){
        resButton.innerHTML=`
        reservar
        `
        return res = true
    }

}

//no me acuerdo como hacer componentes de memoria
