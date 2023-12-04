
var navbar = document.getElementById("navbar");

var secao = document.getElementById("secao");

window.addEventListener("scroll", function(){
    var posicao = secao.getBoundingClientRect();

    if(posicao.top < 0){
        navbar.classList.remove("navbar-scroll");
        navbar.classList.add("navbar-black");
    }
    else{
        navbar.classList.add("navbar-scroll");
        navbar.classList.remove("navbar-black");
        
    }
})

window.onload=scroll;

const usuarios = [
    {
        login: 'pedro',
        pass: '123'
    }

]

var menu = false;
var res = document.getElementById("res");
var lo = document.getElementById("lo");
var erro = document.getElementById("erro");

function cadastro(){
    if(menu == false){
        menu = true;
        
        erro.innerHTML = '<label></label>'
        res.innerHTML = '<label>Ja tem uma conta? </label> <a href="#" class="alert-link text-danger" data-toggle="collapse" data-target="#navbarToggleExternalContent" onclick="cadastro()">Login</a>.'
        lo.innerHTML = '<button type="button" class="btn btn-outline-danger btn-lg" style="height: 50px; width: 170px; border-radius: 30px;" onclick="logar()">Cadastrar-se</button>'
    }
    else{
        menu = false;

        erro.innerHTML = '<label></label>'
        res.innerHTML = '<label>Nâo tem uma conta? </label><a href="#" class="alert-link text-danger" data-toggle="collapse" data-target="#navbarToggleExternalContent" onclick="cadastro()">Cadastrar-se</a>.'
        lo.innerHTML = '<button type="button" class="btn btn-outline-danger btn-lg" style="height: 50px; width: 170px; border-radius: 30px;" onclick="logar()">login</button>'
    }
    
}

function logar(){
    if(!menu){
        let pegaUsuario = document.getElementById('usuario').value;
        let pegaSenha = document.getElementById('senha').value;
        let validalogin = false;

        for(let i in usuarios){

            if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
                validalogin = true;
                break;

            }
        }

        if(validalogin == true){
            erro.innerHTML = '<label></label>'
            location.href = 'site.html';

        }
        else{
            erro.innerHTML = '<label>Usuario ou senha invalidos</label>'
        }
    }
    else{
        let cadaUsuario = document.getElementById('usuario').value;
        let cadaSenha = document.getElementById('senha').value;
        let cadaAttSenha = document.getElementById('attSenha').value;
        let validaExistencia = false;

        if(cadaAttSenha == cadaSenha){
            for(let i in usuarios){
                if(cadaUsuario == usuarios[i].login && cadaSenha == usuarios[i].pass){
                    validaExistencia = true;
                    break;

                }
            }
            if(validaExistencia == true){
                erro.innerHTML = '<label>Este usuario ja esta cadastrado</label>'
            }
            else{
                usuarios.push({ login: cadaUsuario, pass: cadaSenha});
                erro.innerHTML = '<label>cadastrado</label>'
                console.log(usuarios);
                res.innerHTML = '<label>Nâo tem uma conta? </label><a href="#" class="alert-link text-danger" data-toggle="collapse" data-target="#navbarToggleExternalContent" onclick="cadastro()">Cadastrar-se</a>.'
                lo.innerHTML = '<button type="button" class="btn btn-outline-danger btn-lg" style="height: 50px; width: 170px; border-radius: 30px;" onclick="logar()">login</button>'
                $('.collapse').collapse('hide');
                
                
            }
            
        }
        else{
            erro.innerHTML = '<label>Senha errada</label>'
        }
        menu = false;
    }
}