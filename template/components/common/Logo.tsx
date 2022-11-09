import {AspectRatio, useColorMode} from 'native-base'
import MainLogo from '../../assets/images/logo.svg'

const Logo = () => {
  const {colorMode} = useColorMode()
  return (
    <AspectRatio
      ratio={{
        base: 2 / 5,
        md: 9 / 10,
      }}
      height={{
        base: 200,
        md: 200,
      }}
    >
      <MainLogo width={'100%'} fill={colorMode === 'dark' ? '#fff' : '#009CD8'} />
    </AspectRatio>
  )
}

export default Logo
