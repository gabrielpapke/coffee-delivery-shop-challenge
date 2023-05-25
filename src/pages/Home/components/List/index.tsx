import { Item } from '../Item'
import { ListContainer } from './styles'

export function List() {
  return (
    <ListContainer>
      <h2>Nossos cafés</h2>

      <div className="grid">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </ListContainer>
  )
}
