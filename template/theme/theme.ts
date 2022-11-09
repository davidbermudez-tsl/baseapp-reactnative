import {extendTheme} from 'native-base'
import colors from './colors'
import fontConfig from './fonts'

const customTheme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
  components: {
    Button: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: 'md',
      },
      defaultProps: {
        colorScheme: 'primary',
      },
    },
    Input: {
      defaultProps: {
        colorScheme: 'red',
        fontSize: 14,
        autoCapitalize: 'none',
        autoCorrect: false,
      },
    },
    FormControl: {
      defaultProps: {
        mb: 5,
        w: '90%',
        maxW: '480px',
      },
    },
  },
  colors,
  ...fontConfig,
})

// 2. Get the type of the CustomTheme
type CustomThemeType = typeof customTheme

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default customTheme
