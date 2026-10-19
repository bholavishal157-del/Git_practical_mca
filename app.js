const http=require('http');
const server=http.createServer((req,res)=>
{
    res.end('Hello Bhola jee love you');
});
server.listen(3000, ()=>{
    console.log('server running at http://localhost:3000')

});