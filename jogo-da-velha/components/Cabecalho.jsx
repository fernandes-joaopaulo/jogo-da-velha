import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default Cabecalho = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jogo da Velha</Text>
      <Text>Vez do Jogador: {props.vez}</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  text:{
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20
  }
});
