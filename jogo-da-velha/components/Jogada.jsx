import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';


export default Jogada = (props) => {
    const jogada = props.jogada
    return (
        <TouchableHighlight style={styles.container}>
            <View>
                <Text>{jogada[0] || '_'} | {jogada[1] || '_'} | {jogada[2] || '_'}</Text>
                <Text>{jogada[3] || '_'} | {jogada[4] || '_'} | {jogada[5] || '_'}</Text>
                <Text>{jogada[6] || '_'} | {jogada[7] || '_'} | {jogada[8] || '_'}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
