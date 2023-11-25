document.addEventListener('DOMContentLoaded', function () {
    var formData = getFormData();

    console.log(formData);

    var main = document.querySelector('main');

    var container = document.createElement('div');
    container.classList.add('container');

    var nameParagraph = document.createElement('p');
    nameParagraph.innerHTML = '<strong>Nombre:</strong> ' + formData.name;
    container.appendChild(nameParagraph);

    var emailParagraph = document.createElement('p');
    emailParagraph.innerHTML = '<strong>Correo electrónico:</strong> ' + formData.email;
    container.appendChild(emailParagraph);

    var messageParagraph = document.createElement('p');
    messageParagraph.innerHTML = '<strong>Mensaje:</strong> ' + formData.message;
    container.appendChild(messageParagraph);

    main.appendChild(container);
});

function getFormData() {
    var name = localStorage.getItem('name') || 'No disponible';
    var email = localStorage.getItem('email') || 'No disponible';
    var message = localStorage.getItem('message') || 'No disponible';

    return { name, email, message };
}