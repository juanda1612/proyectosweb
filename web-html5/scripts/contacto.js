function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Datos enviados:', name, email, message);

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    alert('Formulario enviado. Puedes ver el envío más tarde.');
}

function viewSubmission() {
    window.location.href = '../html/destino.html';
}