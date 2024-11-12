const multer  = require('multer')

const upload = multer({ dest: 'uploads/',  limits: {
    fieldSize: 1024 * 1024 * 10, 
  } })    // destination set for uploaded files 



const multMid = upload.single('image') 





module.exports = multMid