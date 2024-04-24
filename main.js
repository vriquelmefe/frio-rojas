document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const mensaje = document.getElementById("mensaje").value;
  
      if (!nombre || !email || !mensaje) {
        alert("Por favor complete todos los campos del formulario.");
        return;
      }
  
      // Aquí puedes implementar el código para enviar los datos del formulario al servidor
      // Puedes utilizar AJAX para enviar los datos a tu servidor backend y procesarlos allí
  
      // Ejemplo de código AJAX (no funcional sin un servidor backend):
      /*
      fetch('http://tu-servidor-de-correo.com/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          email: email,
          mensaje: mensaje
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('¡Mensaje enviado con éxito!');
        contactForm.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Ocurrió un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
      });
      */
    });
  });
  