const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IDR6YFu1Wy0UpAgP6BliLOIo8wKXpBQSnA7O4ncv9v9de8NoYbf7Hio4CGdVUcRKtf10Zb6H9IHudv2TRs6bkHP00xAayDzkk");

//API

// - App config
const app = express();


// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response)=> response.status(200).send('hello world'));

app.post('/payments/create', async (request, response)=>{
    const total = request.query.total;
    console.log('Payment Request Received for this amount >>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: "usd",
    });

    //ok- created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
        
    })
})


// - Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/e-clone-2c31a/us-central1/api