const http=require('http');

const PORT=3000;
const host='localhost'

const server=http.createServer((req, res)=>{

    console.log(req.url);

    let url=req.url;
    let i=url.indexOf("?");
    if(i!=-1){
        url=url.slice(0,i);
    }

    switch (url) {
        case '/contacto':
            res.setHeader("Content-Type","text/html; charset=utf-8")
            res.write(url);
            res.write("<br>Pagina de contacto...!!!<br><hr>");
            res.end("OK, todo en orden...!!!");
                    
            break;

        case '/datos':
            res.setHeader("Content-Type","text/html; charset=utf-8")
            res.write(url);
            res.write("<br>Pagina de datos...!!!<br><hr>");
            res.end("OK, todo en orden...!!!");
                    
            break;
    
        default:
            res.setHeader("Content-Type","text/html; charset=utf-8")
            res.write(url);
            res.end("<br><h1>Page not found</h1>");
                        
    
            break;
    }

});

server.listen(PORT, host, ()=>{
    console.log(`Servidor escuchando en ${host}:${PORT}`);
});