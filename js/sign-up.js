let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let form=document.querySelector("form")
let users=JSON.parse(localStorage.getItem(" users")) || []
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let user={
        name:username.value,
        email:email.value,
        password:password.value,
    }
   
    if(users.find((used)=>used.email==email.value)){
        alert("used for alread to exist")
    }
    else{
        users.push(user);
        alert("user successfuly to created!")
        const stringfy=JSON.stringify(users)
        localStorage.setItem("users",stringfy)
        console.log(localStorage)
    }
})
