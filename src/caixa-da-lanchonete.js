import { validarMetodoPagamento } from './controllers/metodosPagamento'
import { cardapio } from './data/cardapio'

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!validarMetodoPagamento(metodoDePagamento)) {
            return 'Forma de pagamento inválida!'
        }

        const pedido = []
        

        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!'
        }

        for (let item of itens) {
            let [produto, quant] = item.split(',')

            if (quant === '0') return 'Quantidade inválida!'

            if (!cardapio[produto]) return 'Item inválido!'

            const pedidoItem = {
                produto,
                quant
            }
            

            pedido.push(pedidoItem)
        }




        return "";
    }

}

export { CaixaDaLanchonete };
