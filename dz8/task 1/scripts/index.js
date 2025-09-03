document.addEventListener('DOMContentLoaded', (evt)=>{
    const cellulae=document.querySelectorAll('thead td');
    const gradient_colors = gradient_for_blocks({'R':121, 'G':135, 'B':172},{'R':7,'G':21,'B':58},cellulae.length);
    for(let i=0;i<cellulae.length;i++){
        console.log(cellulae[i])
        cellulae[i].style=`background-color: rgb(${gradient_colors[i]['R']}, ${gradient_colors[i]['G']}, ${gradient_colors[i]['B']});`
    }
})