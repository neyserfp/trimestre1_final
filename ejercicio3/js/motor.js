window.addEventListener("load", function(){

    var lista = document.querySelector("#lista");
    var contador = 4;
    agregarElemento();
    agregarElemento();
    agregarElemento();
    eliminarElemento("#e5");
    actualizarContenido("#e6", "Gabriel", 30);
    console.log("Cantidad de Elementos: "+contarElementos());


    // Crea una función llamada agregarElemento que tome un nombre y una edad como parámetros.
    // La función debe crear un nuevo elemento de lista (<li>) que contenga la información proporcionada.
    // Agrega el nuevo elemento a una lista desordenada (<ul>) en la página web.
    function agregarElemento(){
        let nombre = prompt("Indique un nombre");
        let edad = prompt("Indique una edad");
    
        let elemento = document.createElement('li');
        elemento.textContent = nombre+" - "+edad;
        elemento.setAttribute('id', "e"+contador);
        lista.append(elemento);
        contador++;
    
    }
    
    
    // Eliminar Elementos del DOM:Crea una función llamada eliminarElemento que tome un índice como parámetro. La función debe eliminar el elemento de lista correspondiente al índice dado.
    function eliminarElemento(indice){
        let elemento = document.querySelector(indice);
        lista.removeChild(elemento);
    }
    
    // Actualizar Contenido de Nodos:Crea una función llamada actualizarContenido que tome un índice, un nuevo nombre y una nueva edad como parámetros.
    // La función debe actualizar el contenido del elemento de lista correspondiente al índice dado con la nueva información.
    function actualizarContenido(indice, nombre, edad){
        let elemento = document.querySelector(indice);
        elemento.textContent = nombre+" - "+edad;
    }
    
    // Contar Elementos en el DOM: cantidad total de elementos de lista en la página.
    function contarElementos(){
        return lista.childElementCount;
    }
    

    


  
    
});


