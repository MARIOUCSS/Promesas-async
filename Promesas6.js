// const mostrardatos= async()=>{
// const datos=await fetch("https://restcountries.eu/rest/v2/alpha/col");
// const pais=await datos.json();
// console.log(pais)
// }
// mostrardatos();
const buscarDatos = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/alpha/col");
  // fetch() retorna una promesa, así que necesitamos esperar por ella

  const pais = await res.json();
  // res es ahora una respuesta HTTP, por lo que
  //necesitamos llamar a res.json()

  console.log(pais); // Los datos de Colombia se registrarán en la consola
};

buscarDatos();

const buscarPais = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );
    const datos = res.json();
    return datos;
  } catch (error) {
    console.log(error);
  }
};

const buscarvecinos=async()=>{
const colombia=await buscarPais("col");
console.log(colombia)
}
buscarvecinos();

const buscarpaisesyvecinos=async()=>{
const colombia=await buscarPais('col');
const vecinos=await Promise.all(
    colombia.borders.map((bo)=>buscarPais(bo))
)

console.log(vecinos);
}
buscarvecinos();