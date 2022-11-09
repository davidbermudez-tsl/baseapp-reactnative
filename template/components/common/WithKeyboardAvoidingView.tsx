import React from 'react'
import {KeyboardAvoidingView, Platform} from 'react-native'

function WithKeyboardAvoidingView<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>,
) {
  const ComponentWithKeyboardAvoidingView = (props: T) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <WrappedComponent {...props} />
      </KeyboardAvoidingView>
    )
  }
  return ComponentWithKeyboardAvoidingView
}

export default WithKeyboardAvoidingView
