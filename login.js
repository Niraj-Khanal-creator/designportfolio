function validateForm(){
    let name= document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let  password=document.getElementById("password").value;
    let confirmPassword= document.getElementById("confirm_password").value;
    if (name.trim() === "") {
    alert("Name cannot be empty");
    return false;
    }
    if (email===""){
        alert("enter valid email");
        return false;
    }
    if(password.length < 8){
        alert("password must be minimun 8 character");
        return false;
    }
    if (password!==confirmPassword){
    alert("password didn't match");
    return false;
    }
    return true;
}

function validateLogin(){

    let login_email= document.getElementById("login_email").value;
    let login_password= document.getElementById("login_password").value;
    
    if(login_email ==="" || login_password===""){
        alert("All feilds are required");
        return false;
    }
    alert("login succesfull");
    return true;

}
