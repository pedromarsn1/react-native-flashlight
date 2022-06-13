import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  //mudar as cores
  const [toggle, setToggle] = useState(false);
  const changeToggle = () => {
    setToggle(oldToggle => !oldToggle)
  }

  //Liga flash
  useEffect(() => {
    Torch.switchState(toggle)
  }, [toggle])

  useEffect(() => {
    //Quando o celular for chacoalhado, mudaremos o toggle
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle)
    })

    // essa função vai ser chamando quando componente for desmontado
    return () => subscription.remove()
  }, [])


  return (

    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity
        onPress={changeToggle}
      >
        <Image
          style={toggle ? style.lightOn : style.lightOff}
          source={toggle ? require('./assets/light-on.png') : require('./assets/light-off.png')}
        />
        <Image
          style={toggle ? style.imagemDio : style.imagemDioWhite}
          source={require('./assets/logo-dio.png')}
        />
      </TouchableOpacity>
    </View>

  )

}

export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lightOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,

  },
  lightOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  imagemDio: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  imagemDioWhite: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
})