import twilio from 'twilio';


const accountSid = 'ACd4b330aed4835e8d8f2af7540afec8da';
const authToken = 'cf15f62a60f781905e2091c117a8b193';
// const client = require('twilio')(accountSid, authToken);

const client=twilio(accountSid, authToken)

client.messages
    .create({
        body: 'prueba',
        from: '+16813956694',
        to: '+541154200776'
    })
    .then(message => console.log(message.sid));
