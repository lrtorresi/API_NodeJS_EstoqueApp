var nodemailer = require('nodemailer');
const crypto = require('crypto');

console.log('entrou no email');

var remetente = nodemailer.createTransport({
    host: 'smtp.live.com',
    service: 'smtp.live.com',
    port: 587,
    secure: true,
    auth: {
        user: 'lrtorresi@hotmail.com',
        pass: 'Chrisrod123!'
    }
});


var emailASerEnviado = {
    from: 'lrtorresi@hotmail.com',
    to: 'ltorresi@gmail.com',
    subject: 'Enviando Email com Node.js',
    text: 'Estou te enviando este email com node.js',
};


remetente.sendMail(emailASerEnviado, function(error){
    if (error) {
    console.log(error);
    } else {
    console.log('Email enviado com sucesso.');
    }
    });