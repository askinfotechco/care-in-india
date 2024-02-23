const multer = require("multer");

//specify the storage engine
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date().now() + '-' + file.originalname);
  }
});

// file validation
const  fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        callback(null, true)
    }else {
        //prevent the upload
        callback({message: 'Unsupported File Format'}, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024},
    fileFilter: fileFilter
});

module.exports = upload;