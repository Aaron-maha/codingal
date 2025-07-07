function validateform(e){
    alert("Form submitted successfully");
    e.preventDefault();
    const email=document.getElementById("email").value;
    const pass=document.getElementById("password").value;
    const age=document.getElementById("age").value;
    const msgBox=document.getElementById("massage");
    let Message="";
    if(email===''){
        Message='Enter an email';
        msgBox.style.color="red";
    } else if(pass===''){
        Message='Enter a password';
        msgBox.style.color="red";
    } else if(age===''){
        Message='Enter your age';
        msgBox.style.color="red";
    }else{
        Message='Login successfully';
        msgBox.style.color="green";
    }
    msgBox.innerText=Message;
}