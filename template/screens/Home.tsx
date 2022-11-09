import {Center, Text, VStack} from 'native-base'
import Header from '../components/common/Header'
import MainLayout from '../layouts/MainLayout'

const Home = () => {
  return (
    <MainLayout>
      <Header />
      <VStack flex={1}>
        <Center flex={1}>
          <Text>Welcome to BaseApp</Text>
        </Center>
      </VStack>
    </MainLayout>
  )
}

export default Home
