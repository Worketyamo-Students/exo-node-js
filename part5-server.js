const fs = require('fs/promises')
const path = require('path')
const http = require('http')
const dotenv = require('dotenv/config')
const PORT = process.env.PORT

const chemin = path.join(__dirname,'public','index.html')
const chemin2 = path.join(__dirname,'public','style.css')
const chemin3 = path.join(__dirname,'data','user.json')



const server = http.createServer(async(req,res)=>{

    console.log(`${req.method},${req.url}`);
// Utilisons la methode POST
    if(req.method === 'POST' && req.url === '/api/users'){
        let body = ''
        req.on('data',(chunks)=>{
            body += chunks.toString()
        })
        req.on('end',async()=>{
            try {
                const contenuparse = JSON.parse(body)
                let user =[]
                try {
                    const contenu = await fs.readFile(chemin3,'utf-8')
                    user = JSON.parse(contenu)
                } catch (error) {
                    console.log(error); 
                }
                //   sert a ajouter automatiquement un id
                contenuparse.id = user.length+1 
                user.push(contenuparse)

                console.log(user);
                await fs.writeFile(chemin3,JSON.stringify(user,null,2),'utf-8')
                res.writeHead(201,{'content-type':'application/json;charset=utf-8'})
                res.end(JSON.stringify({message:'Utilisateur ajoute avec succes',User:contenuparse}))

                
            
                


                


            } catch (error) {
                console.log(error);
                
                
            }

        })
    
        
    }

    // switch (req.url) {
    //     case '/':
    //         res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    //         const contenu1 = await fs.readFile(chemin,'utf-8')
    //         res.end(contenu1)
    //         break;

    //     case '/style.css':
    //             res.writeHead(200,{'content-type':'text/css;charset=utf-8'})
    //         const contenu2 = await fs.readFile(chemin2,'utf-8')
    //         res.end(contenu2)
    //         break;

    //     case '/Api/users':
    //          res.writeHead(200,{'content-type':'application/json;charset=utf-8'})
    //         const contenu3 = await fs.readFile(chemin3,'utf-8')
    //         res.end(contenu3)
    //         break;


    
    //     default:
    //           res.writeHead(404,{'content-type':'text/html;charset=utf-8'})
            
    //         res.end(`Erreur 404 page introuvable`)


    //         break;
    // }
    

    

})
server.listen(PORT,()=>{
    console.log(`le server tourne sur http://localhost:${PORT}`);
    
})



