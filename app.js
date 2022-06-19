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
        const usuarioValor = usuario.value
        alert(usuarioValor)
    }
})

