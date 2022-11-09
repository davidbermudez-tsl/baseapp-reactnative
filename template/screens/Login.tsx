import {Box, Button, FormControl, Icon, Input, Pressable, WarningOutlineIcon} from 'native-base'
import React from 'react'
import useLoginForm from '../components/auth/hooks/useLoginForm'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MainLayout from '../layouts/MainLayout'
import WithKeyboardAvoidingView from '../components/common/WithKeyboardAvoidingView'
import Header from '../components/common/Header'

const Login = () => {
  const {handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting} =
    useLoginForm()

  const [passwordVisible, setPasswordVisible] = React.useState(false)
  return (
    <MainLayout>
      <Header />
      <Box justifyContent={'center'} alignItems="center" flex={1}>
        <FormControl isInvalid={Boolean(touched.email && errors.email)}>
          <Input
            placeholder="Enter Email"
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
            variant="underlined"
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}
            value={values.email}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.email}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(touched.password && errors.password)}>
          <Input
            secureTextEntry={!passwordVisible}
            onBlur={handleBlur('password')}
            placeholder="Enter password"
            variant="underlined"
            onChangeText={handleChange('password')}
            value={values.password}
            InputRightElement={
              <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
                <Icon
                  as={<MaterialIcons name={passwordVisible ? 'visibility' : 'visibility-off'} />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.password}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl flex={1} flexDirection={'row'}>
          <Button onPress={() => handleSubmit()} isLoading={isSubmitting} alignSelf="flex-end" flex={1}>
            Login
          </Button>
        </FormControl>
      </Box>
    </MainLayout>
  )
}

export default WithKeyboardAvoidingView(Login)
