

//handsOnLab 1:
function mostrarLista(lista=[]){
    if(lista.length===0){
        console.log("La lista está vacía...!!!")
        return;
    }

    lista.forEach((elemento, indice)=>{
        let texto = `${indice+1}) valor de ${elemento}; corresponde al índice ${indice}`;
        console.log(texto);
    });

    console.log(`La longitud de la lista es de ${lista.length} caracteres`);

}

mostrarLista([1,90,44,100]);

mostrarLista();
