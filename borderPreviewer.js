function ChangeBorder(){
    const input = document.getElementById('i').value;
    const border = document.getElementById('b');
    const changer = document.getElementById('p');
    if(input == ""){
        border.style.borderRadius = "0"; 
        changer.innerHTML = "";   
    }
    else{
        border.style.borderRadius = input + "px";
        changer.innerHTML = "border-radius: " + input + "px;";  
    }
}