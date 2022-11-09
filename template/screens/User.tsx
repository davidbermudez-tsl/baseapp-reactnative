import {Center, Text, VStack} from 'native-base'
import Header from '../components/common/Header'
import MainLayout from '../layouts/MainLayout'

const User = () => {
  return (
    <MainLayout>
      <Header title={'User'} />
      <VStack flex={1}>
        <Center flex={1}>
          <Text />
        </Center>
      </VStack>
    </MainLayout>
  )
}

export default User
