import { Coffee } from '../../../../reducers/cart/reducer'
import { Item } from '../Item'
import { ListContainer } from './styles'

export function List() {
  const coffees: Coffee[] = [
    {
      id: '1',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: '2',
      name: 'Expresso Americano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      tags: ['tradicional'],
    },
    {
      id: '3',
      name: 'Expresso Cremoso',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      tags: ['tradicional'],
    },
  ]
  return (
    <ListContainer>
      <h2>Nossos cafés</h2>

      <div className="grid">
        {coffees.map((item) => (
          <Item key={item.id} coffee={item} />
        ))}
      </div>
    </ListContainer>
  )
}
