// document.getElementsByClassName('arrow')[0].addEventListener('click',function(){
    
//     if(document.body.getElementsByClassName('str')[0].value!=''){
//         document.body.getElementsByClassName('space')[0].innerHTML=document.body.getElementsByClassName('space')[0].innerHTML+`<p>`+document.body.getElementsByClassName('str')[0].value +`<BR>`+`</p>`
//     }
//     document.body.getElementsByClassName('str')[0].value=''
// }) 
// document.getElementsByClassName('btn')[0].addEventListener('click',function(){
//     console.log('hi')
//     let ele=document.querySelectorAll('p')
//     for (let i in ele){
//         console.log(i)
        
//     }
//})


document.getElementsByClassName('arrow')[0].addEventListener('click',function(){
    
    if(document.body.getElementsByClassName('str')[0].value!=''){
        let v=document.createElement('p')
        v.innerHTML=document.body.getElementsByClassName('str')[0].value +`<img src="delete-02-stroke-rounded.svg" class="image">`
        document.body.getElementsByClassName('space')[0].appendChild(v)
    }
    document.body.getElementsByClassName('str')[0].value=''
}) 
document.querySelector('.btn').addEventListener('click',function(){
    let ele=document.querySelectorAll('p')
    let del=document.body.querySelectorAll('.image')
    
    for (let j of del){
        j.style.visibility='visible'
    }
    console.log(ele)
    ele.forEach(function(a){
        a.addEventListener('click',function(){
            a.remove()
        })
    })
})
function handleKeyPress(event) {
    if (event.keyCode === 13) {
      document.getElementsByClassName("arrow")[0].click(); // Trigger the button click
    }
  }
