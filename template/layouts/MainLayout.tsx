import type {FunctionComponent, ReactNode} from 'react'
import {ScrollView, type ScrollViewProps} from 'react-native'
import {SafeAreaView, type SafeAreaViewProps} from 'react-native-safe-area-context'

interface IProps {
  SafeAreaViewProps?: SafeAreaViewProps
  ScrollViewProps?: ScrollViewProps
  children: ReactNode
}

const MainLayout: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <SafeAreaView {...props.SafeAreaViewProps}>
      <ScrollView {...props.ScrollViewProps}>{props.children}</ScrollView>
    </SafeAreaView>
  )
}

MainLayout.defaultProps = {
  SafeAreaViewProps: {
    style: {
      flex: 1,
    },
  },
  ScrollViewProps: {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {flexGrow: 1},
  },
}

export default MainLayout
