import { Button, FlatList,  StyleSheet, Text, View} from 'react-native';
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
          
            <View >
              <FlatList 
              data={resultados} 
              keyExtractor={item => resultados.cod_historico}
              renderItem={({item}) => 
                
                <Text style={styles.itens}> 
                {'\n'} {item.datapesquisa} {item.cidade} 
                </Text> }
              ListFooterComponent={ 
                <Button
                  title='Atualizar'
                  // perguntar ao prof pq ele faz o get mesmo não estando nessa tela
                  onPress={(e) => setUpdateHistorico(updateHistorico + 1)}
                  style={styles.buttonStyle}
                /> 
              }
              ListFooterComponentStyle={{
                marginLeft:290,
                }}
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
      borderRadius:10
    },
    itens: {
      backgroundColor:'#fff',
      textAlign:'center',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius:10,
      paddingBottom:22,
    },
  });