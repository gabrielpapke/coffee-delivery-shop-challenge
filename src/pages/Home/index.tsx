import { HomeLayout } from './styles'

import { Banner } from './components/Banner'
import { List } from './components/List'

export function Home() {
  return (
    <HomeLayout>
      <Banner />
      <List />
    </HomeLayout>
  )
}
