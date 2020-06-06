# MOBILE
The mobile was created using React Native with the Expo.

# DEPENDENCES
- axios

## EXPO
`expo install expo-constants` is a property of css.
`expo install react-native-svg` to install an dependence for React Native work with .svg.
`expo install react-native-maps` to install google maps.

## Expo Google Fonts
A library that support every fonts available in google fonts, to work with Expo, to install the font you have to be with Expo installed in your machine, and write in terminal `expo install @expo-google-fonts/"font name"`, and import the font in your file that will use it, like the example:

    import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
    import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

You can see that I imported `useFonts`, with it you can store the fonts to an array, and the app will start when the fonts is loaded, follow the example:

    const [fontsLoaded] = useFonts({
        Roboto_400Regular, 
        Roboto_500Medium,
        Ubuntu_700Bold
    });

    if(!fontsLoaded){
        return <AppLoading />
    }

How you can see, while the all fonts is loading the app will be in that if, `<AppLoading />` is imported from expo. To see the documentation just go to the URL page `https://dev.to/expo/expo-google-fonts-is-released-4g58`.

## REACT NAVIGATOR
It will bring some utilities to your react Native project, like buttons, modals and others things, the installing command is `npm install @react-navigation/native`, 
After that, you have to install all the libraries that you need, just write `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`. 
For a pile navigation you can install `npm install @react-navigation/stack`, so with this you can back by a button.
Follow the link to see de documentation, `https://reactnavigation.org/docs/getting-started`.
