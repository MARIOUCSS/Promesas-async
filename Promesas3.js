const userlista=[
{id:1,name:'juan',city:'4'},
{id:2,name:'pedro',city:'3'},
{id:3,name:'jaime',city:'2'},
{id:4,name:'luis',city:'1'},
]
const citylista={
    1:'peru',
    2:'Inglaterra',
    3:'santo domingo',
    4:'madrid'
}

const getusuarios=()=>{
return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve(userlista);
   },2000)

})

}
const ciudad=()=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve(citylista);
       },500)
    
    })
    
    }

async function  prueba2(){
 const user= await getusuarios();
 const ciuda=await ciudad();
  console.log(user)
  console.log(ciuda)

}
prueba2();
// getusuarios()
// .then(res=>{console.log(res)
//             ciudad()
//            .then(me=>{
//             console.log(me)
//            })})
// .catch(error=>{console.log(error)})