import { aplicarDescontoOuAcrescimo, validarMetodoPagamento } from './controllers/metodosPagamento'
import { cardapio } from './data/cardapio'

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    if (!validarMetodoPagamento(metodoDePagamento))
      return 'Forma de pagamento inválida!'

    if (itens.length === 0) return 'Não há itens no carrinho de compra!'

    const pedido = []
    let valorTotal = 0
    
    for (let item of itens) {
      let [produto, quant] = item.split(',')

      if (quant === '0') return 'Quantidade inválida!'
      
      if (!cardapio[produto]) return 'Item inválido!'
      
      const pedidoItem = {
          produto,
          descricao: cardapio[produto].descricao,
          quant
        }
        
        pedido.push(pedidoItem)

        valorTotal += cardapio[produto].valor * quant
    }
    


    for (let produto of pedido) {
      if (cardapio[produto.produto].descricao.includes('extra')) {
        const descricao = cardapio[produto.produto].descricao
        const nomeProdutoPrincipal = descricao
          .split(' (extra do ')[1]
          .replace(')', '')

        if (!pedido.some(item => item.descricao === nomeProdutoPrincipal)) {
          return 'Item extra não pode ser pedido sem o principal'
        }
      }
    }

    const valorTotalComDesconto = aplicarDescontoOuAcrescimo(valorTotal, metodoDePagamento) / 100



    return `R$ ${valorTotalComDesconto.toFixed(2).toString().replace('.', ',')}`
  }
}

export { CaixaDaLanchonete }
