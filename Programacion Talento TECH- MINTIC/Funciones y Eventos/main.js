
        // -------------------------------------------------
        // Definimos una función llamada "saludar"
        // Las funciones agrupan código para ejecutarlo cuando se necesite
        // -------------------------------------------------
        function saludar() {
            // prompt() muestra un cuadro de diálogo donde el usuario puede escribir algo
            let nombre = prompt("¿Cómo te llamas?");
            
            // Creamos un mensaje personalizado usando la variable 'nombre'
            let mensaje = `¡Hola ${nombre}, bienvenido a JavaScript!`;

            // -------------------------------------------------
            // document.getElementById("mensaje").textContent
            // Coloca el mensaje dentro del elemento <p id="mensaje">
            // -------------------------------------------------
            document.getElementById("mensaje").textContent = mensaje;

            // También mostramos el mensaje en la consola del navegador
            console.log("Usuario saludado: " + nombre);
        }
