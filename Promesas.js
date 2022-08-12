const datos = [
  {
    id: 1,
    titulo: "Iron Man",
    Año: "2017",
  },
  {
    id: 2,
    titulo: "Hombre Araña",
    Año: "2019",
  },
  {
    id: 3,
    titulo: "Vengadores",
    Año: "2020",
  },
  {
    id: 4,
    titulo: "Dragon ball",
    Año: "2020",
  },
];

const getdatos=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(datos);
    },1500);
  });

}
// getdatos().then((datos)=>console.log(datos));
async function fetching(){
try {
    const datosf=await getdatos();
    console.log(datosf);
} catch (error) {
    console.log(error)
}

}
fetching();