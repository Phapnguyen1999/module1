// let feet=Number(prompt("Nhap feet: "));
// let meter=Number(prompt("Nhap meter: "));
let feet=9;
let meter=60;
function feettometer(feet){
    let meter;
    return meter = 0.305 * feet;
}
function metertofeet(meter){
    let feet;
    return feet = 3.279 * meter;
}
console.log(feettometer(feet));
console.log(metertofeet(meter));