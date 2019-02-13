
function enviar(num)
{
    var con = document.calculadora.valores.value;
    document.getElementById("valores").value = con + num;
}
function eliminarElemnto()
{
    var con = document.calculadora.valores.value;
    var nuevo = con.substring(0, con.length - 1);
    document.getElementById("valores").value = nuevo;
}
function eliminarTodo()
{

    document.getElementById("valores").value = "";
}
function resultado()
{
    var res = eval(document.calculadora.valores.value);
    if (res == "Infinity") {
        document.getElementById("valores").value = "Error";
    } else
    {
        document.getElementById("valores").value = res;
    }
}