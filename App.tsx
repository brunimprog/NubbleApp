import React from 'react';
import {View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {SafeAreaView} from 'react-native';
import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text preset="headingMedium">Teste</Text>
        <Button title='Entrar'/>
      </View>
    </SafeAreaView>
  );
}

export default App;
