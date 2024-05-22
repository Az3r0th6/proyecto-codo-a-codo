document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var consulta = document.getElementById('consulta').value;
    var mensaje = document.getElementById('mensaje').value;
    var acepto = document.getElementById('acepto').checked;

    if (nombre && email && telefono && consulta && mensaje && acepto) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar la lógica para enviar el formulario
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
