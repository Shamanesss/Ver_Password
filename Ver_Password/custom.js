
aceptar.addEventListener('click', check);

function check() {
    let chexbox =document.querySelector('#aceptar');
    
    if(chexbox.checked){
        document.querySelector('#btn-aceptar').disabled= false;
    }
    else{
        document.querySelector('#btn-aceptar').disabled = true;
    }

}

let contrasena = document.querySelector('#password');
let boton = document.querySelector('#btn-password');
let ojo = document.querySelector('img');


boton.addEventListener('click', hacker);

function hacker(){
    if(contrasena.type == 'password'){
        contrasena.type = 'text';
        ojo.src="ojoAbierto1.jpg"
    }else{
        contrasena.type = 'password';
        ojo.src="ojoCerrado1.jpg"

    }
}
