const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    let inputdata=""
    req.on("data",(x)=>{
          inputdata+=x
          console.log(inputdata,"inputdata")
        fs.readFile("./array.js","utf-8",(err,existingdata)=>{
           if(err){
            console.log(err) 
            res.end(err)
           }else{

            console.log(existingdata,"existing",typeof JSON.parse(existingdata)) 

        
            
            newdata=JSON.parse(existingdata)
        
            // newdata.push (JSON.parse(inputdata))

            // console.log(newdata)

            // let newdata=JSON.parse(existingdata)
            let isexist=false
            for(i=0;i<newdata.length;i++){
                if (JSON.stringify(newdata[i])==inputdata){
                    
                   isexist=true
                   break
                  
                }
            }
               if(!isexist){
                newdata.push(JSON.parse(inputdata));
               }else{
                console.log("Data already exists");
               }
               fs.writeFile("./array.js",JSON.stringify(newdata),(err)=>{
                if(err){
                    res.end(err)
                    // res.end()
                }else{
                    res.end(JSON.stringify(newdata))
                    // res.end()Z
                }
            })
            }

          
           })
         
          
          
    })
   
    res.end()

})
server.listen(3314,()=>{
    console.log("server running")
})


// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     let inputdata = "";
    
//     req.on("data", (chunk) => {
//         inputdata += chunk;
//         console.log(inputdata, "inputdata");
//     });

//     req.on("end", () => {
//         fs.readFile("./array.js", "utf-8", (err, existingdata) => {
//             if (err) {
//                 console.log(err);
//                 res.end(err);
//             } else {
//                 console.log(existingdata, "existing", typeof JSON.parse(existingdata));

//                 let newdata = JSON.parse(existingdata);

//                 let isexist = false;
//                 for (let i = 0; i < newdata.length; i++) {
//                     if (JSON.stringify(newdata[i]) === inputdata) {
//                         isexist = true;
//                         break;
//                     }
//                 }

//                 if (!isexist) {
//                     newdata.push(JSON.parse(inputdata));
//                 } else {
//                     console.log("Data already exists");
//                 }

//                 fs.writeFile("./array.js", JSON.stringify(newdata), (err) => {
//                     if (err) {
//                         res.end(err);
//                     } else {
//                         res.end(JSON.stringify(newdata));
//                     }
//                 });
//             }
//         });
//     });
// });

// server.listen(3314, () => {
//     console.log("server running");
// });
