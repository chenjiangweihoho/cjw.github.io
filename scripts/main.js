let myButton = document.querySelector("button")
let mHeading = document.querySelector("h1")
function setUserName() {
    let myName = prompt('请输入你的名字')
    localStorage.setItem('name',myName)
    mHeading.textContent = 'hello '+myName;
    
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName = localStorage.getItem('name')
    mHeading.textContent = 'hello'+storeName;
}
myButton.onclick = function(){
    setUserName();
}