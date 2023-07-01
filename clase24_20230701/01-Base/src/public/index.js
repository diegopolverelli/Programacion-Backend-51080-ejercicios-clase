// 1) enviar clave publicable a Stripe
const stripe=Stripe('pk_test_51NNIBNChliO4FK21Ci0bZ98dxe0YqCWfAr0rm7nMf3ggTpPhr92sbMBRaiO71OeFHbFHc18BNF7R3vAH3wkH75hB00uUqZZpXz')

const cargarMedios=async()=>{
    let importe=10

    if(parseFloat(document.getElementById('importe').value) < 1){
        alert('El pago no puede ser menor a 1')
        return
    }

    importe=parseFloat(document.getElementById('importe').value)*100
    console.log(importe)

// 2) realizar peticion a backend por un paymentIntent
    const response=await fetch("/create-payment-intent", {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({importe})
    })

    const {clientSecret} = await response.json()
    console.log(clientSecret)

    // 5) genero los medios de pago (los pido a stripe...), y los muestro (con mount) en mi html
    elements=stripe.elements({clientSecret})
    const paymentElement=elements.create("payment")
    paymentElement.mount('#payment-element');


} // fin cargarMedios()

const pagar=async ()=>{
    // 6) confirmar el pago a stripe
    const resultado=await stripe.confirmPayment({
        elements,
        confirmParams:{
            return_url: 'http://localhost:3000/index.html'
        }
    })

    // esto se va a ajecutar solo si confirmPayment arroja error...!!!
    console.log(resultado)
    console.log(resultado.error.message)
    document.getElementById('resultado').innerHTML=resultado.error.message
}


// verificar si en la url llega un query param llamado "payment_intent_client_secret",
// que marcaría que se ejecuto bien un pago
const clientSecret=new URLSearchParams(window.location.search).get("payment_intent_client_secret")

if(clientSecret){
    mostrarResultado()
}

async function mostrarResultado(){
    // 7) recupero información sobre el pago cerrado y la muestro en el front
    const {paymentIntent} = await stripe.retrievePaymentIntent(clientSecret)
    console.log(paymentIntent)
    document.getElementById('resultado').innerHTML=paymentIntent.status

}