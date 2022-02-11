function calcular(n1,n2) {
    let result

    n1 = parseFloat(document.getElementById('n1').value)
    n2 = parseFloat(document.getElementById('n2').value)
    
    selector = document.getElementById ('selector').value

    switch(selector) {
        case '+' :
            result = n1 + n2
            document.getElementById('resultado').innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${result}`
            break
        case '-' :
            result = n1 - n2
            document.getElementById('resultado').innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${result}`
            break
        case '*' :
            result = n1 * n2
            document.getElementById('resultado').innerHTML = `O resultado da multiplicação de ${n1} X ${n2} é = ${result}`
            break
        case '/' :
            result = Math.round (n1 / n2)
            if(Number.isNaN(result)) {
                document.getElementById('resultado').innerHTML = 'Insira um divisível válido'
            } else {
            document.getElementById('resultado').innerHTML = `O resultado da divisão de ${n1} / ${n2} é = ${result}`
            break
            }

    }

    return result
}