const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


let users=[
    
]
function btnClick(){
    if (addUser()) {
        alert("You sent a message successfully");
        clearInput();
    }
}
function addUser(){
    let name=document.getElementById("txtName").value;
    let email=document.getElementById("txtEmail").value;
    if(!email.includes("@gmail.com")){
        alert("wrong Gmail");
        return;
    }
    let message=document.getElementById("txtMessage").value;

users.push({
    name,
    email,
    message
});
console.log(users);
return(true);
}
function clearInput() {
    document.getElementById("txtName").value = '';
    document.getElementById("txtEmail").value = '';
    document.getElementById("txtMessage").value = '';
}


