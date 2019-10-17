const fs = require('fs');
const response = require('../helper/status')

const SmtpSettingsController = {
    update: function(req, res){

        const rawData = fs.readFileSync('data/data.json');
        const data = JSON.parse(rawData);
        // const success={
        //     status:true,
        //     message:"Data Successfully saved"
        // }

        const error = {
            status: true,
            message:{
                    host:null,
                    port:null,
                    user:null,
                    passwoard:null,
                }
            
        }


        if(!req.body.smtp_host){
            error.status=true
            error.message.host =`SMTP HOST is reuired`
            return res.render('index', {title: 'SMTP-Settings', smtp: data.smtp, error: error});
        }
        if(!req.body.smtp_port){
            error.status=true
            error.message.port=`SMTP PORT is reuired`
            return res.render('index', {title: 'SMTP-Settings', smtp: data.smtp, error: error});
        }
        if(!req.body.smtp_user){
            error.status=true
            error.message.user=`SMTP USER is reuired`
            return res.render('index', {title: 'SMTP-Settings', smtp: data.smtp, error: error});
        }
        if( !req.body.smtp_pass){
            error.status=true
            error.message.password=`SMTP USER is reuired`
            return res.render('index', {title: 'SMTP-Settings', smtp: data.smtp, error: error});
        }


       

        data.smtp.host = (req.body.smtp_host).toString().trim();
        data.smtp.port = (req.body.smtp_port).toString().trim();
        data.smtp.user = (req.body.smtp_user).toString().trim();
        data.smtp.pass = (req.body.smtp_pass).toString().trim();

        if(req.body.tls_secure){
            data.smtp.tls = true;
        }else{
            data.smtp.tls = false;
        }

        // console.log(data.smtp);
        console.log(req.body)

        fs.writeFile('data/data.json', JSON.stringify(data), function(err){
            if(err){
                console.log(`SmtpController::Update error: ${err}`);
                res.render('index', {title: 'SMTP-Settings', smtp: data.smtp});
            }
            const success = response.response(true, false, `SMTP settings saved successfully!`);
            res.render('index',{title: 'SMTP-Settings', smtp: data.smtp, success})
        });
        
       


    }
}

module.exports = SmtpSettingsController;
