let buttonn = document.getElementById('btn');

buttonn.addEventListener('click', ()=>{
    // alert("You clicked")
    document.getElementsByClassName('txt')[0].innerHTML= "You clicked!"
    document.getElementById('btn').innerText= "Done"
})
buttonn.addEventListener('dblclick', ()=>{
    // alert("You clicked")
    document.getElementsByClassName('txt')[0].innerHTML= "You clicked 2 times!"
    document.getElementById('btn').innerText= "Done"
})
document.addEventListener('keydown', (e)=>{
    if(e.key=='Enter'){
        document.getElementsByClassName('txt')[0].innerHTML= "You pressed Enter!"
    }
})