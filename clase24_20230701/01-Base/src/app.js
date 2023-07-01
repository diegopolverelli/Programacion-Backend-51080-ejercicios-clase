import express from 'express';
import stripe from 'stripe'
const PORT=3000;

// 3) enviar clave backend a Stripe
const stripeInstance=stripe('sk_test_51NNIBNChliO4FK21u6U68uqoQjpI5bS9HTfPhMo6RAXY1cp029rvMUSmBtnS9UyDAoJyyYs4lmt6G8rOs9JwZpVu00sbnaTj3R')

const app=express();

app.use(express.static('./src/public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/create-payment-intent',async(req,res)=>{
    let {importe}=req.body;


    // 4) mi backend se conecta a stripe e intenta generar un PaymentIntent
    const paymentIntent=await stripeInstance.paymentIntents.create({
        amount: importe,
        currency: 'usd'
    })

    console.log(paymentIntent)

    res.send({clientSecret: paymentIntent.client_secret})

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));