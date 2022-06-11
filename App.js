import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Cotacao from './components/Cotacao';
import Api from './components/Api';

export default function App() {
  const [cotacao, setCotacao] = useState(0);
  const [inputCotacao, setInputVCotacao] = useState(0);
	
  async function cotacaoUsd(){
	const response = await Api.get('json/last/USD-BRL');
  	setCotacao(response.data.USDBRL); 
  };
	
  async function cotacaoEur(){
	const response = await Api.get('json/last/EUR-BRL');
  	setCotacao(response.data.EURBRL); 
  };
 	
  async function cotacaoBtc(){
	const response = await Api.get('json/last/BTC-BRL');
  	setCotacao(response.data.BTCBRL); 
  };
	
	
  return (
    <View style={styles.container}>
    	<Text style={styles.title}>
        	Casa de Cambio
      	</Text>

      	<Image style={styles.img}
        	source={{uri: 'https://i.pinimg.com/564x/90/9e/5a/909e5aa23f8b3ff4d293dbeb162a59db.jpg',}}  
      	/>

		<Text style={styles.textBlock}>Informação de valores instantâneos. Escolha qual moeda você quer saber:</Text>
      	<TextInput style={styles.input}
			onChangeText={(data)=>setInputVal(data)}
      	/>
	  
		<TouchableOpacity 
			style={styles.btn}
 	    	onPress={cotacaoUsd}	
		>
			<Text style={styles.textbtn}>Dólar Americano - Real Brasileiro</Text>
		</TouchableOpacity>	
		  
		<TouchableOpacity 
			style={styles.btn}
 	    	onPress={cotacaoEur}	
		>
			<Text style={styles.textbtn}>Euro - Real Brasileiro</Text>
		</TouchableOpacity>	
		  
		<TouchableOpacity 
			style={styles.btn}
 	    	onPress={cotacaoBtc}	
		>
			<Text style={styles.textbtn}>Bitcoin - Real Brasileiro</Text>
		</TouchableOpacity>	  

      	<Cotacao data={cotacao}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 30,
    justifyContent: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
	marginTop: 60
  },	
  img: {
    width: 190,
    height: 190,
    marginTop: 30,
    marginBottom: 30
  },
  input: {
    backgroundColor: 'white'
  },
  textBlock: {
    fontSize: 20,
	justifyContent: 'center'
  },
  btn: {
	width: '80%',
  	marginTop: 10,
  	marginBottom: 15
  },
  textbtn: {
	fontSize: 20,
	textAlign: 'center'
  }
});
