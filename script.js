function addText(text) {
    var output_field = document.getElementById("resulting-message");
    var noOutput_div = document.getElementById("no-output");
    var output_div = document.getElementById("output-message");

    if (text) {
        noOutput_div.style.display = "none";
        output_div.style.display = "flex";
        output_field.innerHTML = text;
    }
    else {
        noOutput_div.style.display = "flex";
        output_div.style.display = "none";
        output_field.innerHTML = "";
    }
}

function errorText(text) {
    var noOutput_div = document.getElementById("no-output");
    var output_div = document.getElementById("output-message");

    noOutput_div.style.display = "flex";
    output_div.style.display = "none";

    var noOutput_title = document.getElementById("title-no-output");
    var noOutput_text = document.getElementById("text-no-output");

    noOutput_title.innerHTML = "Erro durante ação";

    noOutput_text.innerHTML = text;

}
    

function verifyText(text) {
    if ((/[A-Z]/.test(text))) {
        return "No seu texto não pode ter caracteres maiúsculos";
    }
    else if (/[áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]/.test(text)) {
        return "No seu texto não pode ter caracteres com acentuação";
    }
    else {
        return;
    }
}

function encrypt() {
    var elementMessage = document.getElementById("input-message");
    var message = elementMessage.value;

    erro = verifyText(message);
    if (erro) {
        errorText(erro);
        return;
    }

    var output_message = "";


    for (var i = 0; i < message.length; i++ ) {
        if (message[i] == "e") {
            output_message += "enter";
        }
        else if (message[i] == "i") {
            output_message += "imes";
        }
        else if (message[i] == "a") {
            output_message += "ai";
        }
        else if (message[i] == "o") {
            output_message += "ober";
        }
        else if (message[i] == "u") {
            output_message += "ufat";
        }
        else {
            output_message += message[i];
        }
    }
    
    addText(output_message);
}

function decrypt() {
    var elementMessage = document.getElementById("input-message");
    var message = elementMessage.value;

    erro = verifyText(message);
    if (erro) {
        errorText(text);
        return;
    }
    
    var output_message = "";
    
    var i = 0;
    while (i < message.length) {
        if (message.slice(i,i+2) == "ai") {
            output_message += "a";
            i += 2;
        }
        else if (message.slice(i,i+5) == "enter") {
            output_message += "e";
            i += 5;
        }
        else if (message.slice(i,i+4) == "imes") {
            output_message += "i";
            i += 4;
        }
        else if (message.slice(i,i+4) == "ober") {
            output_message += "o";
            i += 4;
        }
        else if (message.slice(i,i+4) == "ufat") {
            output_message += "u";
            i += 4;
        }
        else {
            output_message += message[i];
            i++;
        }
    }
    
    addText(output_message);
}

function copy() {
    var output_field = document.getElementById("resulting-message");
    navigator.clipboard.writeText(output_field.innerHTML);
}