let weight=document.querySelector('#weight');
let feet=document.querySelector('#feet');
let inche=document.querySelector('#inches')
let btn=document.querySelector('.btn');
let result=document.querySelector('.result');
let w=0,f=0,i=0;
let n=0;
// assigning all value in input
// bmi=weight(kg)/height*height(meter);
btn.addEventListener('click',()=>{
    f=parseInt(feet.value);
    i=parseInt(inche.value);
    // change feet & inche into meter
    let mi=parseInt(f*12+i);
    let meter=parseFloat(mi*0.0254);
    // finding weight
  w=parseInt(weight.value);
  let bmi=parseFloat((w/(meter*meter)).toFixed(1));
  result.innerHTML=bmi;
})
