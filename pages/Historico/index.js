import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useState,useEffect } from 'react';
import axios from 'axios'

export default function Historico() {

    const [updateHistorico, setUpdateHistorico] = useState(0)
    const [resultados, setResultados] = useState([])
    console.log("Atualizado")
    useEffect(() => {
    // define a função
    const fazBusca = async () => {
    const { data } = await axios.get('https://g665df6fa3d1993-projetorest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tb_historico/')
        setResultados(data.items)
      }
    // execução incondicional
      fazBusca()
    }, [updateHistorico])


    return (
      <View style={styles.container}>
        {
          resultados.map((resultado) =>(
          <View key={resultado.cod_historico}>
            <View style={styles.itens}>
              <Text>{resultado.datapesquisa} {resultado.cidade}</Text>
            </View>
          </View>    
          ))
        }
          <View style={styles.buttonStyle}>
            {/* <Text>Open up Historico.js to start working on your app!</Text> */}
            <Button 
            title='Atualizar'
            // perguntar ao prof pq ele faz o get mesmo não estando nessa tela
            onPress={(e) => setUpdateHistorico(updateHistorico + 1)}
            />
          </View>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius:50

    },
    itens: {
      backgroundColor:'#ggg',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius:10
    },
    buttonStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      
    },
  });
  
// data = {
//        "cidade": "Diamantina",
//        "datapesquisa": "2000-11-19T12:02:44Z"
//      }
// url = 'https://g665df6fa3d1993-projetorest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tb_historico/'
      
// res = requests.post(url,json=data)