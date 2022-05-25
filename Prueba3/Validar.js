function validar() {
    var result_val_email = validar_email();
    var result_val_rpassw = validar_rpassword();
    var result_val_passw = validar_password();
    var result_val_direccion = validar_direccion();
    var result_val_referencia = validar_referencia();
    var result_val_numeros = validar_numeros();
    var result_val_ciudad = validar_ciudad();
    var result_val_cb = validar_cb();
    var result_val_select = validar_select();
    return (result_val_email  && result_val_passw  && result_val_direccion && result_val_referencia && result_val_codPostal && result_val_rpassw && result_val_ciudad && result_val_cb && result_val_select && result_val_numeros );
}

function validar_fto_email(email) {
    var idx_arroba = email.indexOf("@");
    var div = document.getElementById("msj-email");
    if (idx_arroba < 1) {
        return false;
    } else {
        var idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.length - 1) {
            return false;
        }        
        return true;
    }
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email)) {
            return false;
        } else {
            div.innerHTML = "El formato del email no es valido";
            div.className = "text-danger";
            return false;
        }
    } else {
        div.innerHTML = "Este campo es obligatorio";
        div.className = "text-danger";
        return false;
    }
}


function validar_direccion() {
    var direccion = document.getElementById("Direccion").value;
    var div = document.getElementById("msj-direccion");
    if (direccion !="") {
        div.innerHTML ="";
    } else {
        div.innerHTML = "Este campo es obligatorio"
        div.className = "text-danger"
    }
}

function validar_ciudad() {
    var ciudad = document.getElementById("ciudad").value;
    var div = document.getElementById("msj-ciudad");
    if (ciudad !="") {
        div.innerHTML ="";
    } else {
        div.innerHTML = "Este campo es obligatorio"
        div.className = "text-danger"
    }
}

function validar_referencia() {
    var referencia = document.getElementById("Referencia").value;
    var div = document.getElementById("msj-referencia");
    if (referencia !="") {
        div.innerHTML ="";
    } else {
        div.innerHTML = "Este campo es obligatorio"
        div.className = "text-danger"
    }
    
}


function validar_rpassword() {
    var passw1 = document.getElementById("Contraseña1").value
    var passw2 = document.getElementById("Contraseña2").value
    var div = document.getElementById("msj-pass2")
    if (passw2 == passw1) {
        div.innerHTML = "";
        div.className = "text-success";
        return true;
    }  
    else {
        div.innerHTML = "Las contraseñas no coinciden";
        div.className ="text-danger"
        return false;

    }
} 


function validar_cb(){
    var checkboxs=document.getElementsByName("cb");
    var okay=false;
    var count = 0;
    var div = document.getElementById("msj-pasatiempos")
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {

        count++;
        }
    }
    if(count > 1){
     div.innerHTML ="";
     okay=true;    
    }
    if(!okay){
        div.innerHTML="Por favor selecciones al menos 2 opciones";
        div.className ="text-danger";
        return false;
    }

}

function validar_select() {
    var comuna = document.getElementById("comuna");
    var div = document.getElementById("msj-comuna")
    if (comuna.value == "") {
        div.innerHTML="Por favor Ingrese una opcion";
        div.className="text-danger";
        return false;
    } else {
        div.innerHTML ="";
        return true;
    }
}

$(document).ready(function() {
    $("#CodPostal").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $('#number-message').addClass('d-block').removeClass('d-none');
            return false;
        } else {
            $('#number-message').addClass('d-none').removeClass('d-block');
        }
    });
});

$(document).ready(function() {
    $("#celular").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        } else {
            $('#').addClass('d-none').removeClass('d-block');
        }
    });
});

$(document).ready(function() {
    $("#Red_Fija").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        } else {
            $('#').addClass('d-none').removeClass('d-block');
        }
    });
});

function validar_numeros () {
    var celular = document.getElementById("celular").value;
    var red_fija = document.getElementById("Red_Fija").value;
    var div = document.getElementById("msj-celular");
    if ( celular == "" && red_fija == ""){
        div.innerHTML = "Al menos un campo debe ser ingresado";
        div.className="text-danger";

    } else {
        div.innerHTML ="";
    }

}

function validar_password() {
    var passw = document.getElementById("Contraseña1").value;
    var div = document.getElementById("msj-pass1");
    if  (passw.length > 2 && passw.length < 7) {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La contraseña debe tener de 3 a 6 caracteres";
        div.className = "text-danger";
        return false;
    }
}

