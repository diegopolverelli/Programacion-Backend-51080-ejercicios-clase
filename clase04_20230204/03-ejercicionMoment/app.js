const moment =require('moment');
let a;
a=moment("2011/10/31", "YYYY/MM/DD").fromNow(); // 11 years ago
console.log(a);
a=moment("20120620", "YYYYMMDD").fromNow(); // 11 years ago
console.log(a);
a=moment().startOf('day').fromNow();        // 11 hours ago
console.log(a);
a=moment().endOf('day').fromNow();          // in 13 hours
console.log(a);
a=moment().startOf('hour').fromNow();      
console.log(a);


a=moment().subtract(10, 'days').calendar(); // 01/25/2023
console.log(a);
a=moment().subtract(6, 'days').calendar();  // Last Sunday at 11:12 AM
console.log(a);
a=moment().subtract(3, 'days').calendar();  // Last Wednesday at 11:12 AM
console.log(a);
a=moment().subtract(1, 'days').calendar();  // Yesterday at 11:12 AM
console.log(a);
a=moment().calendar();                      // Today at 11:12 AM
console.log(a);
a=moment().add(1, 'days').calendar();       // Tomorrow at 11:12 AM
console.log(a);
a=moment().add(3, 'days').calendar();       // Tuesday at 11:12 AM
console.log(a);
a=moment().add(10, 'days').calendar();     
console.log(a);

console.log(moment());

let hoy=moment();
let nac=moment("23/03/1978","DD/MM/YYYY");

if (nac.isValid()){
    let dias = hoy.diff(nac,"days");
    console.log(`Nací hace más o menos ${dias} dias`);
    // console.log(16389/365);
    let years = hoy.diff(nac,"years");
    console.log(`Nací hace más o menos ${years} años`);

    let minu = hoy.diff(nac,"minutes");
    console.log(`Nací hace más o menos ${minu} minutos`);


}else{
    console.log("Fecha invalida...!!!");
}

