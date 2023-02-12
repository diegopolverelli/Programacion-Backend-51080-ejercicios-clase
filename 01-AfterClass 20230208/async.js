
const timer=(segundos,cb)=>{
    let inicio=new Date();
    while (new Date() - inicio < 1000*segundos) {
        
    }
    cb(null, `Finalizó OP sincrona a los ${segundos} segundos`);
}

const sincrona=()=>{

        timer(2,(e,r)=>{
            if (e){
                console.log(e)
            }else{
                console.log(10**2)
                console.log(r)
            }
        });
        timer(5,(e,r)=>{
            if (e){
                console.log(e)
            }else{
                console.log(r)
            }
        });
        timer(0.5,(e,r)=>{
            if (e){
                console.log(e)
            }else{
                console.log(r)
            }
        });
        timer(1,(e,r)=>{
            if (e){
                console.log(e)
            }else{
                console.log(r)
            }
        });
        timer(0,(e,r)=>{
            if (e){
                console.log(e)
            }else{
                console.log(r)
            }
        });


}


const asincrona=()=>{
    setTimeout(() => {
        console.log('Fin OP 2 seg.')
    }, 2000);
    
    setTimeout(() => {
        console.log('Fin OP 5 seg.')
        console.timeEnd("asincrona");
    }, 5000);
    
    setTimeout(() => {
        console.log('Fin OP 0,5 seg.')
    }, 500);
    
    setTimeout(() => {
        console.log('Fin OP 1 seg.')
    }, 1000);
    
    setTimeout(() => {
        console.log('Fin OP 0 seg.')
    }, 0);
    
}

// console.time("asincrona");
// asincrona();

console.time("sincrona");
sincrona();
console.timeEnd("sincrona");













// setTimeout(()=>{
//     let inicio=new Date()
//     let iSec=inicio.getSeconds();
//     while (new Date() - inicio <=3000) {
//         if (new Date().getSeconds() !=iSec){
//             console.log(iSec, " op1");
//             iSec=new Date().getSeconds();
//         }
//     }
// },0);

// setTimeout(()=>{
//     let inicio=new Date()
//     let iSec=inicio.getSeconds();
//     while (new Date() - inicio <=3000) {
//         if (new Date().getSeconds() !=iSec){
//             console.log(iSec, " op2");
//             iSec=new Date().getSeconds();
//         }
//     }
// },0);

// setTimeout(()=>{
//     let inicio=new Date()
//     let iSec=inicio.getSeconds();
//     while (new Date() - inicio <=3000) {
//         if (new Date().getSeconds() !=iSec){
//             console.log(iSec, " op3");
//             iSec=new Date().getSeconds();
//         }
//     }
// },0);

// setInterval(()=>{
//     console.log("op1")
// },1000)
// setInterval(()=>{
//     console.log("op2")
// },1000)
// setInterval(()=>{
//     console.log("op3")
// },1000)

// "use strict";
 
// function asyncSqrt(value, callback) {
//     console.log('START execution with value =', value);
//     setTimeout(function() {
//         callback(value, value * value);
//     }, 0 | Math.random() * 100);
// }
 
// // asyncSqrt(2, function(value, result) {
// //     console.log('END execution with value =', value, 'and result =', result);
// // });
// // console.log('COMPLETED ?');

// for (var n = 0; n < 10; n++) {
//     asyncSqrt(n, function(value, result) {
//         console.log('END execution with value =', value, 'and result =', result);
//     });
// }
// console.log('COMPLETED ?');

// ---------------------------
// ---------------------------
// ---------------------------


// "use strict";
 
// function promiseSqrt(value){
//     return new Promise(function (fulfill, reject){
//         console.log('START execution with value =', value);
//         setTimeout(function() {
//             fulfill({ value: value, result: value * value });
//         }, 0 | Math.random() * 100);
//     });
// }
 
// var p = [];
// for (var n = 0; n < 10; n++) {
//     p.push(promiseSqrt(n, n * 2));
// }
// Promise.all(p).then(function(results) {
//     results.forEach(function(obj) {
//         console.log('END execution with value =', obj.value, 'and result =', obj.result);
//     });
//     console.log('COMPLENTED');
// });
