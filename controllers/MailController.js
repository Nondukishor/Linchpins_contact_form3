const fs = require('fs');
const mailSender = require('../services/mailSender');

const mailer = {
    sendMail: function(req, res) {

        let attachment;
        if (req.file !== undefined ){
            attachment = req.file.filename;
        }

        const transporter =  mailSender.transporter();
        const mailOptions = mailSender.mailOptions(req.body.name, req.body.email, req.body.message);

        if(attachment !== undefined){
            mailOptions.attachments = [
                {
                    filename: attachment,
                    path: __dirname + '/../public/uploads/'+ attachment
                }
            ]
        }

        console.log(JSON.stringify(mailOptions, null, 2));

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log(error);
                res.sendStatus(500);
            }

            if(info !== undefined){
                console.log(`Mail send to : ${info.messageId}`);
            }

            if(attachment !== undefined){
                fs.unlink(`${__dirname}/../public/uploads/${attachment}`, (err) => {
                    if(err){
                        console.log(`Can not delete file form uploads folder. Delete it manually. Error: ${err}`);
                    }
                    return;
                });
            }
            res.sendStatus(200);
        });
    }
}

module.exports = mailer;
