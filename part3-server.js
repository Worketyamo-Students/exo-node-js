const { error, clear } = require('console');
const fs = require('fs/promises')
const path = require('path')


// if(!fs.existsSync('data')){
//     fs.mkdirSync('data')
// }
// else{
//     console.log('le dossier exite deja'); 
// }

// if(!fs.existsSync('public')){
//     fs.mkdirSync('public')
// }
// else{
//     console.log('le dossier exite deja'); 
// }

const chemin = path.join(__dirname,'data')
const chemin1 = path.join(chemin,'user.json')


const chemin2 = path.join(__dirname,'public')
const chemin3 = path.join(chemin2,'index.html')
// const chemin4 = path.join(chemin2,'style.css')
// fs.writeFileSync(chemin3,'bonjour','utf-8')
// fs.writeFileSync(chemin4,'bonjour{font-size:10px}','utf-8')

const information=[
    {
        id:1,
        name:'haruna',
        role:'admin',
    },
    {
        id:2,
        name:'alice',
        role:'user,'

    }
]
// console.log(information);
async function readuser() {
    try {
        const contenu = await fs.readFile(chemin1,'utf-8')
        const contenuparse = JSON.parse(contenu)
         return contenuparse

        

        
    } catch (error) {
        console.log(error);
        
        
    }
    
}




async function adduser(user) {
  

try {
      const datajson = await readuser()
      const newuser ={
        id:datajson.length+1,
        name:user.name,
        role:user.role,

        
      }
      datajson.push(newuser)
      await fs.writeFile(chemin1,JSON.stringify(datajson,null,2),'utf-8')
      console.log('utilisateur ajouter');
      
    
} catch (error) {
    console.log(error);
    
    
}
    
}
async function main(params) {
    await adduser({name:"valdini",role:'user',})
    const data = await readuser()
    console.log(data);
    
    
}
main()




