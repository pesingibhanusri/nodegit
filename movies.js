const http=require("http")
const port=3300;


const server=http.createServer((req,res)=>{
if(req.url=="/movies"){
    res.writeHead(200,{"content-type":"application/json"})
  res.write(JSON.stringify({page:"movies",message:"welcome movies"}))
  res.end()

}else if(req.url==="/pushpa"){
    res.writeHead(200,{"content-type":"application/json"})
    res.write(JSON.stringify({page:"puspha",message:"welcome pushpha"}))
    res.end()
}
else if(req.url==="/amaran"){
    res.writeHead(200,{"content-type":"application/json"})
    res.write(JSON.stringify({page:"amaran",message:"welcome amaran"}))
    res.end()
}else{
    res.write("page not found")
}
    res.end()
})


   
server.listen(port,()=>{
console.log("server is running")
})