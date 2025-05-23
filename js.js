const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

buttons.forEach((btn)=>{
 btn.addEventListener('click',(e)=>{
if(e.target.id ==='gray'){
    body.style.backgroundColor = 'gray';
    console.log("clicked");
}
else if(e.target.id ==='yellow'){
    body.style.backgroundColor = 'yellow';
    console.log("clicked");

}
else if(e.target.id ==='green'){
    body.style.backgroundColor = 'green';
    console.log("clicked");

}
else if(e.target.id ==='pink'){
    body.style.backgroundColor = 'pink';
    console.log("clicked");

}
else{
    console.log('there is nothing');
}
 })
});
