```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let comissao = Number((valorTotalVendas*0.05)+(100*qtdeCarrosVendidos))
  let salario = Number(comissao+2000)
  return salario
}
```