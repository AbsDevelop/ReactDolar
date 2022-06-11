import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Cep(props){
  return(
    <View style={styles.textBlock}>
    <Text style={styles.title}>Resultado:</Text>
      	<Text style={styles.text}>Nome: {props.data.name} ({props.data.code} > {props.data.codein})</Text>
		<Text style={styles.text}>Compra: {props.data.ask}</Text>
		<Text style={styles.text}>Venda: {props.data.bid}</Text>
		<Text style={styles.text}>Variação: {props.data.varBid}</Text>
		<Text style={styles.text}>Data: {props.data.create_date}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  },
  title: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  textBlock: {
    marginTop: 5,
    padding: 10,
    paddingHorizontal: 40,
    borderWidth: 1,
    backgroundColor: 'white'
  }
});  