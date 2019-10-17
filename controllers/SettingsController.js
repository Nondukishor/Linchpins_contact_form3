const fs = require('fs');

const setting = {
    index: function(req, res){
        const rawData = fs.readFileSync('data/data.json');
        const data = JSON.parse(rawData);
        res.render('index', { title: 'SMTP-Settings', smtp: data.smtp});
    },
    mail: function(req, res){
        const rawData = fs.readFileSync('data/data.json');
        const data = JSON.parse(rawData);
        res.render('mail', {title: 'Mail-Settings', mail: data.mail});
    },
    user: function(req, res){
        const rawData = fs.readFileSync('data/data.json');
        const data = JSON.parse(rawData);
        res.render('user', {title: 'User-Settings', auth: data.auth});
    }
}

module.exports = setting;
