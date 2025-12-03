// codigo para validaciones del formulario de contacto


document.addEventListener('DOMContentLoaded', function(){ 

    const form = {
        email: '',
        subject: '',
        message: ''
    }

    
    const inputEmail = document.getElementById("email");
    const inputSubject = document.getElementById("subject");
    const inputMessage = document.getElementById("message");
    const btnSubmit = document.querySelector("#btn-contacto");

    
    inputEmail.addEventListener("input", validarFormContacto);
    inputSubject.addEventListener("input", validarFormContacto);
    inputMessage.addEventListener("input", validarFormContacto);

    function validarFormContacto(e){
        if(e.target.value.trim() == ""){
            mostrarAlerta(`El campo ${e.target.id} no puede estar vacio`, e.target.parentElement);
            form[e.target.name] = '';
            comprobarForm();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta("Por favor, ingrese un email valido", e.target.parentElement);
            form[e.target.name] = '';
            comprobarForm();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        form[e.target.name] = e.target.value.trim().toLowerCase();
        
        comprobarForm();
    }

    function mostrarAlerta(mensaje, referencia){

        limpiarAlerta(referencia);

        const error = document.createElement("DIV");
        error.textContent = mensaje;

        error.classList.add('div-error');

        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.div-error');

        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){

        const val = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

        const resultado = val.test(email);
        return resultado;
    }

    function comprobarForm(){
        if(Object.values(form).includes('')){
            btnSubmit.disabled = true;
            return;
        }

        btnSubmit.disabled = false;
    }

})