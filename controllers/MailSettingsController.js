const fs = require('fs');
const path = require('path');
const response=require('../helper/status')

const MailSettingsController = {
    update: function(req, res){
        
        console.log(__dirname);
        console.log(path.join(__dirname+'/../data', 'data.json'));
        const rawData = fs.readFileSync('data/data.json');
        const data = JSON.parse(rawData);

            const recipients= req.body.recipient;
            recipients.forEach(recipient => {
                if(recipient==null || recipient == undefined || recipient =="" ){
                    const err = response.response(false, true, `One Mail filed is empty! check manually`);
                    res.render('mail',{title: 'Mail-Settings', mail: data.mail, err})
                }
            });
        data.mail.recipient = req.body.recipient;



        fs.writeFile('data/data.json', JSON.stringify(data), function(err){
            if(err){
                console.log(`SmtpController::Update error: ${err}`);
                res.render('mail', {title: 'Mail-Settings', mail: data.mail});
            }
            const success = response.response(true, false, `Mail settings saved successfully!`);
            res.render('mail',{title: 'Mail-Settings', mail: data.mail, success})
        });
    }
}

module.exports = MailSettingsController;
