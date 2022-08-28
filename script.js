const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");
// console.log(forms,pwShowHide,links)

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
         console.log(pwFields);

        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show","bx-hide");
        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})


function facebook(){
    window.location.href="https://www.facebook.com/";
}

function apple(){
    window.location.href="https://appleid.apple.com/sign-in";
}

let form=document.getElementById("form")
let userdata=JSON.parse(localStorage.getItem("userdata"))||[]
form.addEventListener("submit",function(event){
    event.preventDefault()
    let data={
        name:  form.name.value,
        email:form.useremail.value,
        pass: form.userpass.value,
    }
    if(checkemail(data.email)==true){
        userdata.push(data);
        localStorage.setItem("userdata",JSON.stringify(userdata))
        alert("register sucessfull")
    }else{
        alert("Account already exist")
    }
})
    function checkemail(email){
        let filtered=userdata.filter(function(el){
            return email==el.email
        })
        if(filtered.length>0){
            return false;
        }else{
            return true;      
        }
    }




//   Login Form  // 

let form1=document.getElementById("form1")
let userdata1=JSON.parse(localStorage.getItem("userdata"))||[]

form1.addEventListener("submit",function(event){
    event.preventDefault()
    let data={  
    email:form1.useremail.value,
    pass:form1.userpass.value,
    } 
    if(checksignin(data.email,data.pass)==true){
       
        localStorage.setItem("signin",JSON.stringify(data))
        alert("Sign in Successfull")
        window.location.href="index.html";
    }else{
        alert("Not yet Registered")
    }
})
    function checksignin(email,pass){
        let check=userdata1.filter(function(el){
            return email==el.useremail && pass==el.userpass
        })
        if(check.length>0){
            return false
        }else{
            return true
        }
    }



    import { navbar, footer } from "./import.js"

    let nav=document.getElementById("navbar");
    nav.innerHTML = navbar();
    document.getElementById("footer").innerHTML = footer();