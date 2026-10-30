// const path = require('path')

// const chemin1 = path.resolve('data','user.json')
// console.log(`1. le chemin absolu:${chemin1}`);

// const chemin2 = path.basename(chemin1,path.extname(chemin1))
// console.log(`2. Nom sans extension:${chemin2}`);

// const chemin3 = path.dirname(chemin1)
// console.log(`3. Repertoire:${chemin3}`);

// const chemin5 = path.extname(chemin1)
// console.log(`4. Extension du fichier:${chemin5}`);

// const chemin41 = path.join(__dirname,'backup')
// console.log(`5.chemin de backup ${chemin41}`);

// const chemin4 = path.join(chemin41,'user.json')
// console.log(`6. Nouvelle route avec Backup:${chemin4}`);





const path = require('path')

const chemin1 = path.resolve('data','user.json')
console.log(`1.chemin absolu :${chemin1}`);

const chemin2 = path.basename(chemin1,path.extname(chemin1))
console.log(`2. Le nom sans extension:${chemin2}`);

const chemin3 = path.dirname(chemin1)
console.log(`3. le repertoire de data:${chemin3}`);

const chemin4 = path.extname(chemin1)
console.log(`4. l'extension :${chemin4}`);

const chemin5 = path.resolve(__dirname,'back')
console.log(`5.nouveau chemin backup:${chemin5}`);

const chemin6 = path.resolve(chemin5,'user.json')
console.log(`6. Nouveau chemin user,json ${chemin6}`);









