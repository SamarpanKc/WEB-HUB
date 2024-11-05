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