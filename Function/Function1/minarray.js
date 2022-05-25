let a=[1,4,119,3,7,3478,534,28,-3,48743,57853];
let minn = minArray(a);
function minArray(arr){
    if (arr.length==0){
        return -1;
    }
    let min=arr[0];
    for (let i =1;i<arr.length;i++){
        if (arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
console.log(minn);