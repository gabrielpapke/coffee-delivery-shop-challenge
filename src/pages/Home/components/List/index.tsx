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
      tags: ['tradicional'],
      imagePath: '/images/coffee-types/expresso-tradicional.svg',
    },
    {
      id: '2',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      tags: ['tradicional'],
      imagePath: '/images/coffee-types/arabe.svg',
    },
    {
      id: '3',
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      tags: ['tradicional'],
      imagePath: '/images/coffee-types/expresso-cremoso.svg',
    },
    {
      id: '4',
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      tags: ['tradicional', 'gelado'],
      imagePath: '/images/coffee-types/cafe-gelado.svg',
    },
    {
      id: '5',
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 12.9,
      tags: ['tradicional', 'com leite'],
      imagePath: '/images/coffee-types/cafe-com-leite.svg',
    },
    {
      id: '6',
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 12.9,
      tags: ['tradicional', 'com leite'],
      imagePath: '/images/coffee-types/latte.svg',
    },
    {
      id: '7',
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 18.9,
      tags: ['tradicional', 'com leite'],
      imagePath: '/images/coffee-types/capuccino.svg',
    },
    {
      id: '8',
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 12.9,
      tags: ['tradicional', 'com leite'],
      imagePath: '/images/coffee-types/macchiato.svg',
    },
    {
      id: '9',
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 18.9,
      tags: ['tradicional', 'com leite'],
      imagePath: '/images/coffee-types/mochaccino.svg',
    },
    {
      id: '10',
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 14.9,
      tags: ['especial', 'com leite'],
      imagePath: '/images/coffee-types/chocolate-quente.svg',
    },
    {
      id: '11',
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 14.9,
      tags: ['especial', 'alcoólico', 'gelado'],
      imagePath: '/images/coffee-types/cubano.svg',
    },
    {
      id: '12',
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 14.9,
      tags: ['especial'],
      imagePath: '/images/coffee-types/havaiano.svg',
    },
    {
      id: '13',
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 14.9,
      tags: ['especial'],
      imagePath: '/images/coffee-types/arabe.svg',
    },
    {
      id: '14',
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 14.9,
      tags: ['especial', 'alcoólico'],
      imagePath: '/images/coffee-types/irlandes.svg',
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
