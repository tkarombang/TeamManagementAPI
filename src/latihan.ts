interface angka{
    x: number;
    y: number;
    ct: number;
    // name: string;
}

interface Huruf{
    name:  string;
}

function logPoint(point: angka){
    console.log("x is = " + point.x  + ", y is = " + point.y)
    console.log("kali x dan y " + point.x * point.y)
}

function logNamed(nm: Huruf){
    console.log("Hello, My Name is " + nm.name)
}

function cekTipe(ct: angka){
    console.log("ini tipe " + ct)
}

const obj = {
    y: 3,
    x: 2,
    name: "Orang Baru",
    ct: 10
}

logPoint(obj)
logNamed(obj)
cekTipe(obj)