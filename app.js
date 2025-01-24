// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".
// El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

// Fucionalidades:
// Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
// Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

let listaAmigosAñadidos = [];
let amigo = document.getElementById('amigo');

const limpiarInput = () => {
    amigo.value = '';
}

console.log(listaAmigosAñadidos)

const agregarAmigo = () => {

    if(amigo.value.length == ''){
        alert('Ingrese un nombre válido')
        limpiarInput()
    } else {
        listaAmigosAñadidos.push(amigo.value)
        limpiarInput()
        mostrarLista('listaAmigos', listaAmigosAñadidos)
    }
}


// Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

const mostrarLista = (contenedorId, lista) => {
    // Obtener el contenedor (puede ser cualquier elemento del DOM)
    let contenedor = document.getElementById(contenedorId);
    
    // Limpiar el contenido del contenedor
    contenedor.innerHTML = '';

    // Recorrer la lista y agregar cada amigo como un <li> al contenedor
    lista.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        contenedor.appendChild(li);
    });
}

// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

const sortearAmigo = () => {
    if( listaAmigosAñadidos.length < 2 )alert('Debes de tener por los menos dos amigos para hacer el sorteo');
    else{
        
        let listaResultado = [...listaAmigosAñadidos];
        let sorteoValido = false;

        // Ciclo para asegurarse que nadie se toque a sí mismo
        while (!sorteoValido) {
            listaResultado.sort(() => Math.random() - 0.5); // Ordenar aleatoriamente

            // Comprobar si alguien se tocó a sí mismo
            sorteoValido = true;
            for (let i = 0; i < listaAmigosAñadidos.length; i++) {
                if (listaAmigosAñadidos[i] === listaResultado[i]) {
                    sorteoValido = false;
                    break;  // Si encontramos un error, reiniciamos el sorteo
                }
            }
        }

        // Mostrar el resultado en pantalla
        let resultadoUl = document.getElementById('resultado');
        resultadoUl.innerHTML = ''; // Limpiar el resultado anterior

        for (let i = 0; i < listaAmigosAñadidos.length; i++) {
            const li = document.createElement('li');
            li.textContent = `${listaAmigosAñadidos[i]} le tocó a ${listaResultado[i]}`;
            resultadoUl.appendChild(li);
        }

    }
}