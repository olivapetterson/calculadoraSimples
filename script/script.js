function displaynum(n1){
    calculator.text1.value = calculator.text1.value + n1;
}

$("#text3").click(function(){
    var input_novo_valor = $("#calculator").text().slice(0,-1); 
    $("#calculator").val(input_novo_valor);
});