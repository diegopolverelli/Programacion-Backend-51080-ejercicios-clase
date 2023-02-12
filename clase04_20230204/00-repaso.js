const fs=require('fs');







// fs.promises.writeFile('./repaso.txt','Esta es una prueba...!!!')
// .then()
// .catch(e=>{
//     console.log(e);
// })
// .finally(()=>{
//     console.log("Operación finalizada");
// });





async function env(archivo){
    let lectura=await fs.promises.readFile(archivo,"utf-8");

    console.log(lectura);
}

env('./repaso.txt');
