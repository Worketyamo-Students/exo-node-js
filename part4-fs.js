const fs = require('fs/promises')
const path = require('path')
const http = require('http')
const PORT = 3000

const chemin = path.join(__dirname,'public')
const chemin1 = path.join(chemin,'index.html')
const chemin2 = path.join(chemin,'style.css')
const chemindata = path.join(__dirname,'data')
const cheminjson = path.join(chemindata,'user.json')

const server = http.createServer(async(req,res)=>{
    console.log(`${req.method},${req.url}`);

    try {
        switch (req.url) {
            case '/':
                res.writeHead(200,{'content-type': 'text/html;charset= utf-8'})
                const contenu = await fs.readFile(chemin1,'utf-8')
                res.end(contenu)
                break;
            case '/style.css':
                res.writeHead(200,{'content-type': 'text/css;charset= utf-8'})
                const contenu1 = await fs.readFile(chemin2,'utf-8')
                res.end(contenu1)
                break;
            case '/Api/users':
                res.writeHead(200,{'content-type': 'application/json;charset= utf-8'})
                const contenu2 = await fs.readFile(cheminjson,'utf-8')
                res.end(contenu2)
                break;
        
            default:
                res.writeHead(404,{"content-type": 'text/html;charset=utf-8'})
                res.end('Erreur 404 page introuvable')
                break;
        }
        
    } catch (error) {
        console.log(error);
        
        
    }
    

})
 server.listen(PORT,()=>{
    console.log(`le server tourne sur http://localhost:${PORT}`);
    


 })
