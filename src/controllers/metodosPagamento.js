const validarMetodoPagamento = (metodoDePagamento) => {
   return ["dinheiro", "debito", "credito"].includes(metodoDePagamento)   
}

const aplicarDescontoOuAcrescimo = (valorTotal, metodoDePagamento) => {
    if (metodoDePagamento === "dinheiro") {
        return valorTotal * 0.95 // Desconto de 5% em pagamento em dinheiro
    } else if (metodoDePagamento === "credito") {
        return valorTotal * 1.03 // Acréscimo de 3% em pagamento a crédito
    }
    return valorTotal
}

export {
    validarMetodoPagamento,
    aplicarDescontoOuAcrescimo
}


