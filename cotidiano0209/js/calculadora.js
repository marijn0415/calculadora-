let numero, flag, total;

function pantalla()
{
    document.getElementById("");
}

function digitar(numero)
{
    document.getElementById("pantalla").value += numero;
}

function sumar()
{
    numero= parseFloat(document.getElementById("pantalla").value);
    borrar();
    flag = "+";
    console.log ="voy a sumar cuando presione el igual";
}

function restar()
{
    numero= parseFloat(document.getElementById("pantalla").value);
    borrar();
    flag = "-";
    console.log ="voy a restar cuando presione el igual";
}

function multiplicar()
{
    numero= parseFloat(document.getElementById("pantalla").value);
    borrar();
    flag = "*";
    console.log ="voy a multiplicar cuando presione el igual";
}

function division()
{
    numero= parseFloat(document.getElementById("pantalla").value);
    borrar();
    flag = "/";
    console.log ="voy a dividir cuando presione el igual";
}

function igual()
{
    if(flag == "+")
    {
        total = numero + parseFloat(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = total;
    }
    else if(flag == "-")
    {
        total = numero - parseFloat(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = total;
    }
    else if(flag == "*")
    {
        total = numero * parseFloat(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = total;
    }
    else if(flag == "/")
    {
        total = numero / parseFloat(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = total;
    }
}

function borrar()
{
    document.getElementById("calculadora").reset();
}



