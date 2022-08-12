const micumple=(marioseenfermo)=>{
return new Promise ((resolve,reject)=>{
   setTimeout(()=>{
     if(!marioseenfermo){
        resolve(2);
     }else{
        reject(new Error("Estoy triste"));
     }

   },2000)
})
}

micumple(true)
.then((result)=>{console.log(`yo tengo ${result} tortas`)})
.catch((error)=>{console.log(error) })
.finally(()=>{console.log('fiesta')})