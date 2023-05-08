import twilio from 'twilio';


const accountSid = 'your account Sid';
const authToken = 'your Token';
// const client = require('twilio')(accountSid, authToken);

const client=twilio(accountSid, authToken)

client.messages
    .create({
        body: 'prueba',
        from: '+16813956694',
        to: '+541154200776'
    })
    .then(message => console.log(message.sid));
