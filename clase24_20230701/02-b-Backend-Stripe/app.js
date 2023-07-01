import express from 'express';
import stripe from 'stripe'
import cors from 'cors';
const PORT=8080;

// 3) enviar clave backend a Stripe
const stripeInstance=stripe('sk_test_51NNIBNChliO4FK21u6U68uqoQjpI5bS9HTfPhMo6RAXY1cp029rvMUSmBtnS9UyDAoJyyYs4lmt6G8rOs9JwZpVu00sbnaTj3R')

const app=express();

// app.use(express.static('./src/public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.post('/api/payments/payment-intents',async(req,res)=>{
    // let {importe}=req.body;

    let productId=req.query.id;

    const products = [
        { id: 1, name: "papas", price: 1000 },
        { id: 2, name: "queso", price: 500 },
        { id: 3, name: "hamburguesa", price: 1500 },
        { id: 4, name: "soda", price: 1000 },
        { id: 5, name: "golosinas", price: 800 }
    ]

    let producto=products.find(pr=>pr.id===parseInt(productId))
    if(!producto) return res.status(404).send({status:'error', error: 'producto inexistente'})

    let dataPago={
        amount: producto.price,
        currency: 'usd',
        metadata: {
            address: JSON.stringify({
                street: 'calle 22',
                postalCode: '1818',
                externalNumber: '23'
            },null,'\t')
        }
    }

    // 4) mi backend se conecta a stripe e intenta generar un PaymentIntent
    const paymentIntent=await stripeInstance.paymentIntents.create(dataPago)

    console.log(paymentIntent)

    res.send({payload: paymentIntent})

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));