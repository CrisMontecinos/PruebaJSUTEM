// 1) Pintar bordes columnas de color primary, success y danger respectivamente
function pintar_columnas(params) {
    console.log("pintar columnas");
    let columnas = document.querySelectorAll('.col-4');
    
    // Agregar clases de color a las columnas respectivamente
    for (let i = 0; i < columnas.length; i++) {
        if (i % 3 === 0) {
            columnas[i].classList.add('border-primary');
        } else if (i % 3 === 1) {
            columnas[i].classList.add('border-success');
        } else {
            columnas[i].classList.add('border-danger');
        }
    }
    
}

function pintar_columnas2(params) {
    console.log("pintar columnas 2");

    // Seleccionar las columnas y agregar las clases de Bootstrap
    $('.col-4:nth-child(3n+1)').addClass('border-primary');
    $('.col-4:nth-child(3n+2)').addClass('border-success');
    $('.col-4:nth-child(3n)').addClass('border-danger');
    
}

// 2) Pintar textos de las filas de color warning, secondary e info respectivamente
function pintar_textos(params) {
    console.log("pintar_textos");
    let textos = document.querySelectorAll('.col-4');

 for(let i = 0; i < textos.length; i++){
        if(i % 3 === 0){
            textos[i].classList.add('text-warning');
        }
        if(i % 3 === 1){
            textos[i].classList.add('text-secondary');
        }
        else{
            textos[i].classList.add('text-info');
        }
    }


}
function pintar_textos2(params) {
    console.log("pintar_textos 2");
    $('.col-4:nth-child(3n+1)').addClass('text-warning');
    $('.col-4:nth-child(3n+2)').addClass('text-secondary');
    $('.col-4:nth-child(3n)').addClass('text-info');

}

// 3)Invertir orden de los textos, es decir que el 1 sera 9, el 2 sera 8, ..., el 9 sera 1
function invertir_textos(params) {
    console.log("invertir_textos");

    // Obtener todos los elementos con la clase '.col-4'
    var columnas = document.querySelectorAll('.col-4');

    // Convertir NodeList a un array para usar métodos de array
    var columnasArray = Array.from(columnas);

    // Obtener los textos de cada elemento y guardarlos en un array
    var textos = columnasArray.map(function(columna) {
        return columna.textContent.trim();
    });

    // Invertir el orden de los textos
    textos.reverse();

    // Asignar los textos invertidos a cada elemento
    columnasArray.forEach(function(columna, index) {
        columna.textContent = textos[index];
    });

    
}

// 4) Borrar celda seleccionada, debe restringir por el limite de celdas y no funcionar cuando queden 0
function borrar_celda(params) {
    
}

// 5) Agregar celda y que el texto sea "contenedor" mas la posicion
function borrar_celda(params) {
    
}

// 6) En paralelo con las 2 anteriores, mostrar en el h1 inicial del html la cantidad de celdas actual
function mostrar_cantidad_celdas(params) {
    
}

