import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigator } from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';

 const App = () => {



  return (
  <NavigationContainer>
 {/* <Navigator />  como le agregue tabs ahora este no es el navegador inicial*/}
 <Tabs />
  </NavigationContainer>
 )
};

export default App;