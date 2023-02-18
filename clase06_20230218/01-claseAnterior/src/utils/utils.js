const multer  = require('multer')
const path=require('path');

// configuracion simple, utiliza nombre de archivo para la subida, aleatorios, 
// sobre los que no tenemos control
// const upload = multer({ dest: 'uploads/' })

rutaUploads=path.join(__dirname,'../uploads');
// rutaUploads=path.join(__dirname+'./../uploads');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, rutaUploads)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() +'-'+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


module.exports=upload;