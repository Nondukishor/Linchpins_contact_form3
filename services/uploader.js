const multer = require('multer');

const uploader = {
    getFilename: function(originalName){
            let output = originalName.substr(0, originalName.lastIndexOf('.')) || originalName;
            output = output.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
        return output;
    },
    storage: multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, __dirname + '../public/uploads/');
        },
        filename: function(req, file, cb){
            cb(null,
                uploader.getFilename(file.originalname) +
                '-' +
                Date.now() +
                '.'+
                file.originalname.substr((file.originalname.lastIndexOf('.')+1))
                );
        }
    }),
    init: function(){
        return multer({storage: uploader.storage});
    }
}

module.exports = uploader;
