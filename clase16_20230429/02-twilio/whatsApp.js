import twilio from 'twilio';


const accountSid = 'your account Sid';
const authToken = 'your Token';
// const client = require('twilio')(accountSid, authToken);

const client=twilio(accountSid, authToken)

client.messages
    .create({
        body: 'Prueba Diego...!!!',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5491154200776'
    })
    .then(message => console.log(message.sid))
