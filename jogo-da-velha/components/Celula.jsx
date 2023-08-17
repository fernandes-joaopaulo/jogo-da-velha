import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';


export default Celula = (props) => {
    
  return (
    <View style={styles.container}>
    <TouchableHighlight onPress={props.onPress}style={styles.botao}><Text style={styles.celula}>{props.valor}</Text></TouchableHighlight>    
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
    display: 'flex',
    flexDirection: 'row'
  },
  botao:{
    backgroundColor: 'yellow',
    textAlign: 'center',
    color: '#000',
    fontSize: '2',
    border: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    height: 100,
    width: 100,
  },
  celula:{
    fontSize: 40,
    textAlign:'center',
    display: 'flex',
    flexDirection: 'row'
  }
});
