const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Welcome to my home page')
    }
    if(req.url === '/about'){
        res.end('Here is our history')
    }
    res.end(`
        <h1>Oops!</h1>
    <p>We can't find the page you're looking for</p> 
    <a href='/'>Back home you go</a>
        `
    )
// res.write('Welcome to our home page')
// res.end ()

})

server.listen(5000)