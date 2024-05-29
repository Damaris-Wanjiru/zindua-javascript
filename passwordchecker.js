
    
   
    let specialNumbers= "0123456789";
    let specialCharacters = "~!@#$%^&*()_+`[}{}?,.<>/|\,";
    let uppercase="QWERTYUIOPASDFGHJKLZXCVBNM"

    function passwordChecker(password, character){
      for(i = 0; i < character.length; i++) {
        if(password.includes(character[i])){
            return true
        }
      }
     
    }


document.getElementById("myButton").onclick=function(){

    let password=document.getElementById("myPassword").value

    if(password==""){

        alert("password is required")
    
    }
    else if(!passwordChecker(password,specialCharacters)){
        alert("pasword must contain at least one special character")
    }
    else if(!passwordChecker(password,specialNumbers)){
        alert("pasword must contain at least one snumber")
    }

    else if(!passwordChecker(password,uppercase)){
        alert("pasword must contain at least one upper case")
    }
    else if(password.length<8){
        alert("pasword must contain at least 8 characters")
    }

    else{
        alert("password is right")
    }
}








   /*
   
    button.addEventListener("click", function(){
        let password =document.getElementById("myPassword")
        if (password.length < 8){
          alert("Password should be atleast 8 characters long")
        }
        else if( (passwordChecker(password, specialNumbers)) && (passwordChecker(password, specialCharacters))){
          alert("Password is valid")
        }
        else   if (password === password.toLowerCase()){
            "alert error"
        }
        else{
          alert("Password is missing special characters")
        }
      
    })*/