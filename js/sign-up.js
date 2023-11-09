let form=document.querySelector(".signups");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let userName=document.querySelector("#userName").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    const data={
        userName,
        email,
        password,
    };
    const setPostman={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),

    };
    fetch(`https://sore-snaps-clam.cyclic.app/api/v1/user`,setPostman)
    .then((response)=>{
        return response.json();
    })
.then((data)=>{
    alert(data.message);
})
.catch((err)=>{
    alert(err);
});
});