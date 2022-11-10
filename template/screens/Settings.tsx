import {VStack} from 'native-base'
import Header from '../components/common/Header'
import ColorScheme from '../components/settings/ColorScheme'
import MainLayout from '../layouts/MainLayout'

const Settings = () => {
  return (
    <MainLayout>
      <Header title={'Settings'} />
      <VStack flex={1}>
        <ColorScheme />
      </VStack>
    </MainLayout>
  )
}

export default Settings
