import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';

import Jogada from './Jogada.jsx'

export default Rodape = (props) => {
    const jogadas = props.jogadas.map((jogada) => <Jogada jogada={jogada} />)
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <Text>Histórico de jogadas:</Text>
    <View style={windowHeight > windowWidth ? null : styles.historico}>{jogadas}</View>
    
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  }

});
