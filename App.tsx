import React from 'react';
import {Text} from './src/components/Text';
import {SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingMedium">Teste</Text>
      <Text preset="paragraphLarge">Teste</Text>
      <Text preset="headingLarge">Teste</Text>
    </SafeAreaView>
  );
}

export default App;
