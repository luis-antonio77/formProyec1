window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario');
    const usuario = document.getElementById('usuario');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const passConfirma = document.getElementById('passConfirma');

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })       
    const validaCampos = ()=> {
        //Capturar los valores del usuario
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()
        const passConfirmaValor = passConfirma.value.trim();

        /*Validando campo usuario
        ALTERNATIVA 
        (!usuarioValor) ? console.log('Campo Vacio') : console.log(usuarioValor)
        */
        if(!usuarioValor){ //if(usuarioValor === '')
            //console.log('Campo Vacio')
            validaFalla(usuario, 'Campo Vacio')
        }else{
            validaOk(usuario)
        }

        //Validando campo email
        if(!emailValor){
            validaFalla(email, 'Campo vacio')
        }else if(!validaEmail(emailValor)){
            validaFalla(email, 'El e-mail no es valido')
        }else{
            validaOk(email)
        }

        //Validando campo pass
        const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
        if(!passValor) {
            validaFalla(pass, 'Campo vacio')
        }else if (passValor.length < 8){
            validaFalla(pass, 'Debe tener minimo 8 caracteres.')
        }else if (!passValor.match(er)){
            validaFalla(pass, 'Debe tener al menos una may, una min y un num.')
        }else{
            validaOk(pass)
        }

        //Validando campo pass confirmacion 
        if(!passConfirmaValor) {
            validaFalla(passConfirma, 'Confirmar su password')
        }else if(passValor !== passConfirmaValor){
            validaFalla(passConfirma, 'La password no coincide')
        }else{
            validaOk(passConfirma)
        }
    }
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }
    
})

