const senha = document.getElementById("passwd");
var mostrar = document.getElementById("show-pass").addEventListener('click', MostrarSenha);

function MostrarSenha(){
    if(senha.type == "password"){
        senha.type = "text";
        document.getElementById("show-pass").innerHTML = 'Ocultar'
}
        else{
            senha.type = "password";
            document.getElementById("show-pass").innerHTML = 'Mostrar'
        }

    }