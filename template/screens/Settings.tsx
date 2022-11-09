import AsyncStorage from '@react-native-async-storage/async-storage'
import {Center, Container, FormControl, Radio, Stack, useColorMode, VStack} from 'native-base'
import {useEffect, useState} from 'react'
import Header from '../components/common/Header'
import MainLayout from '../layouts/MainLayout'

const Settings = () => {
  const [selected, setSelected] = useState<string>('')
  const {setColorMode} = useColorMode()

  useEffect(() => {
    AsyncStorage.getItem('@color-mode').then((colorMode) => setSelected(colorMode || ''))
  }, [])

  return (
    <MainLayout>
      <Header title={'Settings'} />
      <VStack flex={1}>
        <Center flex={1}>
          <Container>
            <FormControl.Label
              _text={{
                fontSize: 'sm',
                bold: true,
              }}
            >
              Color Scheme:
            </FormControl.Label>
            <Radio.Group
              name="colorScheme"
              value={selected}
              accessibilityLabel="Change Color Scheme"
              onChange={(value) => {
                setColorMode(value)
                setSelected(value)
              }}
            >
              <Stack
                direction={{
                  base: 'row',
                  md: 'row',
                }}
                alignItems={{
                  base: 'flex-start',
                  md: 'center',
                }}
                space={4}
                w="75%"
                maxW="300px"
              >
                <Radio value="" size="sm" my={1}>
                  System
                </Radio>
                <Radio value="dark" size="sm" my={1}>
                  Dark Mode
                </Radio>
                <Radio value="light" size="sm" my={1}>
                  Light Mode
                </Radio>
              </Stack>
            </Radio.Group>
          </Container>
        </Center>
      </VStack>
    </MainLayout>
  )
}

export default Settings
