// var express=require("express")
// var app=express()
// // app.use(express.json())
// // app.use(express.urlencoded({extended:true}))
// var multer=require("multer")
// var storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         console.log(__dirname)
//         cb(null,__dirname+"/multimedia")
//     } ,filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }  
// }) 

// var upload=multer({storage:storage})
 

// app.get("/reg",upload.single("file"),(req,res)=>{
//     res.send({
//         file:req.file,
//         body:req.body
//     })
// })
// app.listen(3008,()=>{
//  console.log("server is running")
// })
var express = require("express");
var app = express();
var multer = require("multer");
var path = require("path");

// Configure storage
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(__dirname);
        cb(null, path.join(__dirname, "/multimedia")); // Ensures the correct directory path
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Save with the original file name
    }
});

// Multer upload configuration
var upload = multer({ storage: storage });

// Route to handle file uploads (POST request)
app.post("/reg", upload.single("file"), (req, res) => {
    res.send({
        file: req.file, // File metadata
        body: req.body  // Form data
    });
});

// Start the server
app.listen(3008, () => {
    console.log("Server is running on port 3008");
});
