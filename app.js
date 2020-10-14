const fs = require('fs');

// função de deletar sincrona

/* try {
    fs.unlinkSync('./apagar.txt');

} catch (e){
    console.log(e)
}finally {
    console.log('arquivo apagado com sucesso')
}
 */

 // função de deletar síncrona, mas com callback
 fs.unlinkSync('./apagar.txt', err => {
     if(err){
         console.log(err)
     } else{
         console.log('arquivo apagado com sucesso')
     }
 });

console.log('o que fazer após apagar o arquivo. ');