import multer from 'multer';
import __dirname from './utils.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname+'./../uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+'-'+file.originalname)
    }
  })
  
export const upload = multer({ storage: storage })