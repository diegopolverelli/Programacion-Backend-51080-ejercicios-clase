document.cookie='cookie01=valor de cookie 01...';
document.cookie='cookie02=valor de cookie 02...';

let response=await fetch('http://localhost:3000/');
let json=await response.json();

console.log(json);