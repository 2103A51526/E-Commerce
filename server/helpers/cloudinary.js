const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({ 
  cloud_name: 'debychtgw', 
  api_key: '415897329813339', 
  api_secret: 'P-2eZ73GfP_myrd9bXANhDgxnzo'
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
