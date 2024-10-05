function generarFibonacci() {
    let num = document.getElementById('numero').value;

    
    num = parseInt(num);
    if (isNaN(num) || num <= 0) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    let a = 0, b = 1;
    let resultado = [];

   
    for (let i = 0; i < num; i++) {
        resultado.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }

    
    console.log(resultado.join(', '));

    
    document.getElementById('resultado').innerHTML = <p>${resultado.join(', ')}</p>;
}