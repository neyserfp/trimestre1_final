window.addEventListener('load', function(){

  let peticion = new XMLHttpRequest();

  peticion.onload = function() {
    if (this.readyState === 4 && this.status === 200) {
  
      let clientes = this.responseXML;
  
      let misclientes = clientes.querySelectorAll("cliente");
      let d1 = document.querySelector("#d1");
  
      misclientes.forEach(function(cliente) {
  
        let nombre = cliente.querySelector("nombre").textContent;
        let edad = cliente.querySelector("edad").textContent;
        let email = cliente.querySelector('email').textContent;
  
        let d2 = document.createElement("div");
        d2.className = "col-6 fondo";
  
        let h1 = document.createElement("h2"); 
        h1.className = "text-center";
        h1.textContent = "Nombre: "+nombre;

        let p1 = document.createElement("p"); 
        p1.className = "text-center";
        p1.textContent = "Edad: "+edad;
        
        let p2 = document.createElement("p"); 
        p2.className = "text-center";
        p2.textContent = "Email: "+email;
  
        d2.append(h1, p1, p2);
        d1.append(d2);
              
      });
    }
  };

  
  peticion.open("GET", "clientes.xml", true);
  peticion.send();
});


