let usuarios = [
  {
    id: 1,
    nombre: "marco",
  },
  {
    id: 2,
    nombre: "juan",
  },
];
let telefonos = [
    {
      id: 1,
      telefono: 123456,
    },
    {
      id: 2,
      telefono: 789101,
    },
  ];
const obtenerusuario=(id)=>{
  return new Promise((resolve,reject)=>{
    if(usuarios.find(us=>us.id===id)){
        resolve('El Usuario existe!!!')
    }else{
        reject('El Usuario No existe!!!')
    }
  })
}
// obtenerusuario(3)
// .then(res=>{console.log(res)})
// .catch(error=>{console.log(error)})

const obtenertelefono=(id)=>{
 return new Promise((resolve,reject)=>{
     if(telefonos.find(ted=>ted.id===id)){
      resolve('El telefono existe')
     }else{
        reject('No existe El telefono')
     }

 })

}
obtenerusuario(1)
.then(res=>{
    console.log(res);
    obtenertelefono(5)
    .then(mensaje=>{
        console.log(mensaje);
    })
    .catch((error)=>{
      console.log(error);  
    }
    
    )
})
.catch(rr=>{
    console.log(rr)
})