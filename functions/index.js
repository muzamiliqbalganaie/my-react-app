const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({origin:true});
const stripe = require("stripe")("sk_test_51P1RWxSFgidbdMSVYgp5NL7RZAno5r4oglftxWekwedpVldgEneJG1xeg8NvXa1KrAtcLmkeleHcztT08dzTS5U000XTOsJvHm")


const app = express();
app.use(cors({ credentials:true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/Payment/Create' , async (request,response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved Boom !!! for the amount >..', total)

    const paymentIntent= await stripe.PaymentIntents.create({
        amount: total,
        currenct: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app)