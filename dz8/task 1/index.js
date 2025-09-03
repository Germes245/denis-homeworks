document.addEventListener('DOMContentLoaded', evt=>{
    const tr=document.querySelectorAll('tbody tr');
    let i=0;
    while(i<tr.length){
        tr[i].setAttribute('class','js_stripe_tr');
        console.log(i)
        i=i+2
    }
})