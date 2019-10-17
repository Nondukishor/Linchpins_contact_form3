const nodeMailer = require('nodemailer');
const fs = require('fs');

 mailSender = {
    transporter: function(){
        const rawData = fs.readFileSync('data/data.json');
        const data = JSON.parse(rawData);      
        let config = {
                host: data.smtp.host,
                port: data.smtp.port,
                secure: true,
                auth: {
                    user: data.smtp.user,
                    pass: data.smtp.pass
                }
        }
       
        if(data.smtp.tls == false){
            config.tls = {
                rejectUnauthorized: false
            }
        }else{
            delete config.tls;
        }

        return nodeMailer.createTransport(config);
    },

    mailOptions: function(name, email, message) {
        const rawData = fs.readFileSync('data/data.json');
        const data = JSON.parse(rawData);
        
        const newDate = new Date(Date.now());
        const recipient = data.mail.recipient;
        return {
            from: `"no-reply" ${data.mail.from}`,
            to: recipient,
            subject: `Inquiry ${newDate}`,
            html: `User has sent an inquiry. <br/>Name: ${name}<br/>Email: ${email}<br/>Message: ${message}`,
        }
    }
}

module.exports = mailSender;
