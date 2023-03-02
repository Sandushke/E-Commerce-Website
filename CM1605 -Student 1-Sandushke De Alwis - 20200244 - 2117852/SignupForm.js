function signUpForm(){
    let Full_Name = document.LoginForm.Name.value; 
    let Address = document.LoginForm.Address.value; 
    let Email = document.LoginForm.E_mail.value; 
    let password = document.LoginForm.Password.value;
    let confirmpassword = document.LoginForm.Confirm_Password.value;
    let Phone_Number = document.LoginForm.Phone_Number.value;
    let status = false; 
    
    
    //Check whether the First name bp=ox is empty
    if(Full_Name == ""){  
        document.getElementById("namelocation-1").innerHTML = "Please enter your first name";  
        status = false;
    }else{  
        document.getElementById("namelocation-1").innerHTML = "";  
        status = true;
    }


    //Check whether the Last name box is empty
    if(Address == ""){
        document.getElementById("namelocation-2").innerHTML = "Please enter your last name";
        status = false;
    }else{
        document.getElementById("namelocation-2").innerHTML = "";
        status = true;
    }


    //Check whether the Last name box is empty
    if(Email == ""){
        document.getElementById("namelocation-3").innerHTML = "Please enter your last name";
        status = false;
    }else{
        document.getElementById("namelocation-3").innerHTML = "";
        status = true;
    }
    

    //Check whether the phone number box is empty
    if(Phone_Number == ""){
        document.getElementById("namelocation-4").innerHTML = "Enter a number value";
        status =  false;
    }else{
        status =  true;
    }
    
    
    if(Full_Name != '' && Address != '' && Email != '' && Phone_Number !='') {
        if (Phone_Number.length == 10) { 
            if(password == confirmpassword){
                alert("Dear " + Full_Name + ", Thank you for using Signing Up with us, the recommended results will be shown in a while.");
                return true;
            }
        }
    }else{
        alert("You may need to fill the details")
    };

    //Check whether the Password box is empty
    if(password == confirmpassword){
        return true;
    }else{
        document.getElementById("namelocation-5").innerHTML = "Your password dosen't match";
        return false;
    }   
}