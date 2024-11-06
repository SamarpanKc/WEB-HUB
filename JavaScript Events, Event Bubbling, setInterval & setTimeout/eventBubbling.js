document.querySelector('.child').addEventListener('click', ()=>{
    alert('Child was clicked')
})
document.querySelector('.childContainer').addEventListener('click', (event)=>{
    alert('ChildContainer was clicked')
    event.stopPropagation()
})
document.querySelector('.container').addEventListener('click', ()=>{
    alert('Container was clicked')
})

setInterval(() => {// change for multiple time intervals
    document.querySelector('.child').style.backgroundColor = '#FFFFFF'
}, 3000);


setTimeout(() => {// change for single time interval in milliseconds
    document.querySelector('.child').innerHTML = "Opps Changed!"
}, 5000);