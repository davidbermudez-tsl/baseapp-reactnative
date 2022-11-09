import {Center, Heading} from 'native-base'
import Logo from './Logo'

const Header = ({title}: {title?: string}) => {
  return (
    <Center>
      <Logo />
      <Heading>{title}</Heading>
    </Center>
  )
}

export default Header
