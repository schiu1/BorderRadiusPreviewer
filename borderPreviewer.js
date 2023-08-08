function ChangeBorder(){
    const input = document.getElementById('i').value;
    const border = document.getElementById('b');
    if(input == ""){
        border.style.borderRadius = "0";    
    }
    else{
        border.style.borderRadius = input + "px";
    }
}