function matrix(size,max,min){
    let arrays = new Array(size).fill(new Array(size));
    for (let i=0;i<size;i++){
        arrays[i]=[];
        for (let j=0; j<size;j++){
            arrays[i][j]=Math.floor((Math.random() * (max-min+1) + min));
        }
    }
    return arrays;
}
console.log((matrix(3,10,1)));