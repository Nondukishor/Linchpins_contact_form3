const fs = require('fs');
const response =require('../helper/status')
const UserController = {
    landing: function(req, res){
        res.render('login', { title: 'Linchpins Login' });
    },
    login: function(req, res){
        const userName = req.body.username;
        const password = req.body.password;

        const rawData = fs.readFileSync('data/data.json');
        const data = JSON.parse(rawData);

        if(userName == data.auth.user && password == data.auth.pass){
            res.redirect('/settings/index');
        }else{
            const error = {
                status: true,
                message: `Email or Password didn't match.`
            }

            return res.render('login', {title: 'Linchpins Login', error: error});
        }
    },
    logout: function(req, res){
        console.log(`logging out`);
        res.redirect('login');
    },
    signup: function(req, res){

        const rawData = fs.readFileSync('data/data.json');
        const data = JSON.parse(rawData);

        if(!req.body.username || !req.body.password || !req.body.confirm_password){
            const error = {
                status: true,
                message: `Fields are required.`
            }

            return res.render('user', {title: 'User-Settings', auth: data.auth, error: error});
        }

        const username = (req.body.username).toString().trim();
        const password = (req.body.password).toString().trim();
        const confirmPassword = (req.body.confirm_password).toString().trim();

        if(password !== confirmPassword){
            const error = {
                status: true,
                message: `Password Miss Matched.`
            }

            return res.render('user', {title: 'User-Settings', auth: data.auth, error: error});
        }

        data.auth.user = username;
        data.auth.pass = password;

        fs.writeFile('data/data.json', JSON.stringify(data), function(err){
            if(err){
                console.log(`UserController::Update error: ${err}`);
                const error = {
                    status: true,
                    message: `Internal Server Error.`
                }

                return res.render('user', {title: 'User-Settings', auth: data.auth, error: error});
            }
            const success = response.response(true, false, `User settings saved successfully!`);
            res.render('user',{title: 'User-Settings', auth: data.auth, success})
        });
    }
}

module.exports = UserController;
