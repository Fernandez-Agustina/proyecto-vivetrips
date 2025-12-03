// codigo para hacer la transicion del formulario login a formulario registro y viceversa

const contenedorForms = document.querySelector(".contenedor-forms");

const btnSesion = document.getElementById("btn-inicio");
const btnRegistro = document.getElementById("btn-registro");

btnSesion.addEventListener("click", ()=>{
    contenedorForms.classList.remove("toggle");
});

btnRegistro.addEventListener("click", ()=>{
    contenedorForms.classList.add("toggle");
});

//codigo para el formulario de registro

const btnRegistrar = document.getElementById("btn-registrar");
const emailRegistro = document.getElementById('email_registro');
const passRegistro = document.getElementById('pass_registro');

btnRegistrar.addEventListener("click", (event)=>{

    event.preventDefault();

    let esValido = true;

    if(emailRegistro.value.length < 1){
        mostrarError('email_vacio', 'El campo email no puede estar vacio');
        esValido = false;
    }else if(emailRegistro.value.length < 10){
        mostrarError('email_error', 'El email debe contener al menos 10 caracteres');
        esValido = false;
    }else if(emailRegistro.value.length >= 10){
        ocultarError('email_error');
        ocultarError('email_vacio');
        esValido = true;
        localStorage.setItem("email", emailRegistro.value);
    }

    if(passRegistro.value.length < 1){
        mostrarError('pass_vacio', 'El campo contraseña no puede estar vacio');
        esValido = false;
    }else if(passRegistro.value.length < 3){
        mostrarError('pass_error', 'La contraseña debe contener al menos 3 caracteres');
        esValido = false;
    }else if(passRegistro.value.length >= 3){
        ocultarError('pass_error');
        ocultarError('pass_vacio');
        esValido = true;
        localStorage.setItem("pass", passRegistro.value);
    }

    if(emailRegistro.value.length >= 10 && passRegistro.value.length >= 3){
        alert("Registro exitoso!");
    }

});


// codigo para el formulario de login

const btnLogin = document.getElementById("btn-login");
const emailLogin = document.getElementById("email_inicio");
const passLogin = document.getElementById("pass_inicio");

btnLogin.addEventListener("click", (event)=>{

    event.preventDefault();

    const emailValido = "admin@prueba.com";
    const passValido = "123456";
    const emailRegistrado = localStorage.getItem("email");
    const passRegistrado = localStorage.getItem("pass");


    if( (emailLogin.value == emailValido && passLogin.value == passValido) || (emailLogin.value == emailRegistrado && passLogin.value == passRegistrado) ){
        alert("Inicio de sesion correcto");
        window.location.href = "pages/bienvenida.html";
    }else if(emailLogin.value == "" || passLogin.value == ""){
        alert("Hay campos vacios");
    }else{
        alert("Los datos son incorrectos");
    }

});


function mostrarError(fieldId, message){
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = "❌ " + message;
    errorElement.style.color = "red";
    errorElement.style.display = "block";
}

function ocultarError(fieldId){
    const errorElement = document.getElementById(fieldId);
    errorElement.style.display = "none";
}