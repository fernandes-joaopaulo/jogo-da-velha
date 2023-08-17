import { StyleSheet, View, ScrollView, TouchableHighlight, Text } from 'react-native';
import { useState } from 'react'
import Cabecalho from './components/Cabecalho';
import Celula from './components/Celula';
import Rodape from './components/Rodape';
import { Dimensions } from 'react-native';

export default function App() {
  const [vezJogador, setVezJogador] = useState('x')
  const [estadoTabuleiro, setEstadoTabuleiro] = useState(Array(9).fill(null))
  const [historicoJogadas, setHistoricoJogadas] = useState([])
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
function reiniciarJogo(){

  let vez = 'x'

  setVezJogador(vez)
  setEstadoTabuleiro(Array(9).fill(null))
  setHistoricoJogadas([])

}

  function fimJogo(tab) {
    if (tab[0] && tab[0] === tab[1] && tab[0] === tab[2]) return tab[0]
    if (tab[3] && tab[3] === tab[4] && tab[3] === tab[5]) return tab[3]
    if (tab[6] && tab[6] === tab[7] && tab[6] === tab[8]) return tab[6]
    if (tab[0] && tab[0] === tab[3] && tab[0] === tab[6]) return tab[0]
    if (tab[1] && tab[1] === tab[4] && tab[1] === tab[7]) return tab[1]
    if (tab[2] && tab[2] === tab[5] && tab[2] === tab[8]) return tab[2]
    if (tab[0] && tab[0] === tab[4] && tab[0] === tab[8]) return tab[0]
    if (tab[2] && tab[2] === tab[4] && tab[2] === tab[6]) return tab[2]
    if (tab[0] && tab[1] && tab[2] && tab[3] && tab[4] && tab[5] && tab[6] && tab[7] && tab[8]) return 'Ninguém'
    return null
  }

  function handleClickCelula(i) {
    if (!estadoTabuleiro[i] && !fimJogo(estadoTabuleiro)) {
      let vez = vezJogador
      let jogada = [...estadoTabuleiro]
      jogada[i] = vez
      vez === 'x' ? vez = 'o' : vez = 'x'

      const vencedor = fimJogo(jogada)
      if (vencedor) alert(`${vencedor} foi vencedor.`)

      let historico = [...historicoJogadas]
      historico.push(jogada)
      setVezJogador(vez)
      setEstadoTabuleiro(jogada)
      setHistoricoJogadas(historico)
    }
  }
  return (

    windowHeight > windowWidth ? 

    <ScrollView style={styles.container}>
      <Cabecalho vez={vezJogador} style={styles.cabecalho} />
      <View style={styles.linha}>
        <Celula valor={estadoTabuleiro[0]}
          onPress={() => handleClickCelula(0)} />
        <Celula valor={estadoTabuleiro[1]}
          onPress={() => handleClickCelula(1)} />
        <Celula valor={estadoTabuleiro[2]}
          onPress={() => handleClickCelula(2)} />
      </View>
      <View style={styles.linha}>
        <Celula valor={estadoTabuleiro[3]}
          onPress={() => handleClickCelula(3)} />
        <Celula valor={estadoTabuleiro[4]}
          onPress={() => handleClickCelula(4)} />
        <Celula valor={estadoTabuleiro[5]}
          onPress={() => handleClickCelula(5)} />
      </View>
      <View style={styles.linha}>
        <Celula valor={estadoTabuleiro[6]}
          onPress={() => handleClickCelula(6)} />
        <Celula valor={estadoTabuleiro[7]}
          onPress={() => handleClickCelula(7)} />
        <Celula valor={estadoTabuleiro[8]}
          onPress={() => handleClickCelula(8)} />
      </View>
      <TouchableHighlight style={styles.botao} onPress={() => reiniciarJogo()}><Text style={styles.text}>Reiniciar Jogo</Text></TouchableHighlight>
      <View style={styles.rodape}><Rodape jogadas={historicoJogadas} style={styles.bottom} /></View>
    </ScrollView>

    :

    <View style={styles2.container}>

      <ScrollView style={styles2.tabuleiro}>
        
       <View style={styles2.linha}>
        <Celula valor={estadoTabuleiro[0]}
          onPress={() => handleClickCelula(0)} />
        <Celula valor={estadoTabuleiro[1]}
          onPress={() => handleClickCelula(1)} />
        <Celula valor={estadoTabuleiro[2]}
          onPress={() => handleClickCelula(2)} />
       </View>

       <View style={styles2.linha}>
        <Celula valor={estadoTabuleiro[3]}
          onPress={() => handleClickCelula(3)} />
        <Celula valor={estadoTabuleiro[4]}
          onPress={() => handleClickCelula(4)} />
        <Celula valor={estadoTabuleiro[5]}
          onPress={() => handleClickCelula(5)} />
      </View>

       <View style={styles2.linha}>
        <Celula valor={estadoTabuleiro[6]}
          onPress={() => handleClickCelula(6)} />
        <Celula valor={estadoTabuleiro[7]}
          onPress={() => handleClickCelula(7)} />
        <Celula valor={estadoTabuleiro[8]}
          onPress={() => handleClickCelula(8)} />
       </View>

       <TouchableHighlight style={styles2.botao} onPress={() => reiniciarJogo()}><Text style={styles2.text}>Reiniciar Jogo</Text></TouchableHighlight>

      </ScrollView>

      <ScrollView style={styles2.bloco}>

      <View style={styles2.cabecalho}><Cabecalho vez={vezJogador} /></View>
      <View style={styles2.rodape}><Rodape jogadas={historicoJogadas} /></View>

      </ScrollView>



    </View>


  );
}

const styles = StyleSheet.create({
  
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },

  cabecalho:{
    height: 20
  },

  linha: {
    flexDirection: 'row'
  },

  botao: {
    marginTop: 20,
    backgroundColor: '#f0f0f0',
  },
  text: {
    textAlign: 'center'
  }
})

const styles2 = StyleSheet.create({
  
  container:{
    flexDirection: 'row',
    flex: 1,
  },
  linha:{
    flexDirection: 'row'
  },
  tabuleiro:{
    flexDirection: 'column',
    width: '60%',
    height: '100%',
    marginTop: 60
  },
  bloco:{
    flexDirection: 'column'
  },
  botao:{
    alignContent: 'center',
    marginTop:15,
    backgroundColor: '#f0f0f0',
    width: 110,
    marginLeft: 170
  },
  text:{
    textAlign: 'center'
  },
  cabecalho:{
    border: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    width: '100%'
  },
  rodape:{
    border: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    
    flexDirection: 'column'
  }

})




