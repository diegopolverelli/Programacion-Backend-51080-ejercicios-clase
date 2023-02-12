const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

let listaNueva=[];
let totalVentas=0;

objetos.forEach(objeto=>{
    let valores=Object.keys(objeto);
    // console.log(valores);
    valores.forEach(producto=>{
        if(!listaNueva.includes(producto)){
            listaNueva.push(producto)
        }
    })
});

objetos.forEach(objeto=>{
    let valores=Object.values(objeto);
    // console.log(valores);
    valores.forEach(ventas=>{
        totalVentas+=ventas;
    })
});

console.log(listaNueva);
console.log(totalVentas);
