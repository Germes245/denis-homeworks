function gradient_for_blocks(primus_color, secundus_color, blocks){
    const gradient_counter={};
    const array_of_colors=[];
    for(let i of ['R', 'G', 'B']){
        gradient_counter[i]=(secundus_color[i]-primus_color[i])/blocks;
    };
    for(let i=1;i<=blocks;i++){
        const array_of_color={};
        for(let j of ['R', 'G', 'B']){
            array_of_color[j]=i*gradient_counter[j]+primus_color[j];
        }
        array_of_colors.push(array_of_color);
    }
    return array_of_colors;
};
//{'R':121, 'G':135, 'B':172},{'R':7,'G':21,'B':58}