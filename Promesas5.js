// Historia de usuario: Un usuario puede introducir un número.
// Historia de usuario: El sistema elige un número aleatorio del 1 al 6.
// Historia de usuario: Si el número de usuario es igual al número aleatorio, le da al usuario 2 puntos.
// Historia de usuario: Si el número del usuario es diferente al número aleatorio por 1, le da al usuario 1 punto. De otra manera, le da al usuario 0 puntos.
// Historia de usuario: El usuario puede jugar tanto como quiera.

const insertarnumero=()=>{
return new Promise((resolve,reject)=>{
const numerosusario=Number(window.prompt("Ingrese un numero"));
const aleatorio=Math.floor(Match.random()*6+1);
if(isNaN(numerosusario)){
    reject(new Error("Tipo de Entrada Incorrecta"));
}
if(numerosusario===aleatorio){
resolve({puntos:2,aleatorio,});
}else if(numerosusario===aleatorio+1 || numerosusario===aleatorio-1){
    resolve({puntos:1,aleatorio,});
}else{
    resolve({puntos:0,aleatorio,});
}
})
}

const continuarjuego=()=>{
return new Promise((resolve,reject)=>{
    if(window.confirm("Quieres Continuar")){
        resolve(true);
    }else{
        reject(false);
    }
})

}
const suponer=()=>{
insertarnumero()
.then((res)=>{alert(`Dado:${res.aleatorio}:aleatoria obtubiste ${res.puntos} puntos`)
            continuarjuego()
            .then((res)=>{
                if(res){
                    suponer();
                }else{
                    alert('Termino Juego')
                }
            })


})


.catch((error)=>{alert('error')})
}

// suponer();

const usandoasnc= async ()=>{

try {
    const resultado=await insertarnumero();
    alert(`Dado :${resultado.aleatorio}:obtuvistes${resultado.puntos} puntos`);
    const continuar=await continuarjuego();
    if(continuar){
        usandoasnc();
    }else{
        alert('Termino juego');
    }
} catch (error) { 
    // En lugar del método 'catch', podemos usar la sintáxis 'try/catch'
  alert(error);
}
}
usandoasnc();

