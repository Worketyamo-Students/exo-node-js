const fs = require('fs').promises
const path = require('path')
const http = require('http')
const PORT = 3000

const server = http.createServer(async(req, res) => {
    console.log(`${req.url},${req.method}`);
    

    const road = path.join(__dirname , 'public')
    const secRoad = path.join(road, 'index.html')
    const thirdRoad = path.join(road , 'style.css')
    const pond = path.join(__dirname , 'data')
    const secPond = path.join(pond, 'user.json')

    const contetType = {
        "html" : "text/html ; charset=utf-8",
         "css" : "text/css ; charset=utf-8" ,
         ".json" : "text/users.json"
    }
    try {
        switch (req.url) {
            case '/':
                res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
                const contenu = await fs.readFile(secRoad,'utf-8')
                res.end( contenu)
                break;
            case '/style.css':
                 res.writeHead(200,{'content-type':'text/css;charset=utf-8'})
                 const contenu2 = await fs.readFile(thirdRoad,'utf-8')
                 res.end(contenu2)
                 break;
            case '/Api/users':
                res.writeHead(200,{'content-type':'application/json;charset=utf-8'})
                const contenu3 =await fs.readFile(secPond,'utf-8')
                res.end(contenu3)
        
            default:
                
        res.writeHead(404, { "content-type": "text/html; charset=utf-8" })
        res.end('<h1>404 - Page non trouvee</h1>')
                break;
        }

        
    } catch (error) {
        console.log(error);
        
        
    }
        
   

   

    })

    
server.listen(PORT,()=>{
    console.log(`le serveur tourne bien http://localhost:${PORT}`);

})
;


