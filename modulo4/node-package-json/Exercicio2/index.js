let operacao = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])
let resultado = Number("")

switch(operacao){
	case "soma":
		resultado = num1+num2
		break;
	case "subt":
		resultado = num1-num2
		break;
	case "div":
		resultado = num1/num2
		break;
	case "mult":
		resultado = num1*num2
		break;
 default:
    console.log("Não foi possivel fazer o calculo")
}

console.log("Resposta:",resultado)