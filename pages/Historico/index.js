import { FlatList, StyleSheet, View} from 'react-native';
import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { Button,Text } from '@rneui/themed';

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
              keyExtractor={item => item.cod_historico}
              renderItem={({item}) => 
                <Text style={styles.itens}> 
                Data Pesquisa: {item.datapesquisa.substring(8,10)+
                '/'+item.datapesquisa.substring(5,7)+
                '/'+item.datapesquisa.substring(0,4)} 
                {'\n'}Cidade: {item.cidade} 
                </Text> 
                }
              ListFooterComponent={ 
                <Button
                  title='Atualizar'
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
    },
    itens: {
      flex:1,
      backgroundColor:'rgba(255,105,180,0.35)',
      textAlign:'center',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius:10,
      marginTop: 15,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 25,
      color:'white',
    },
    buttonStyle:{
      marginTop: 10,
    }
  });