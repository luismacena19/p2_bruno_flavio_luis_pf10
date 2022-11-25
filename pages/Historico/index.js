import { 
  FlatList, 
  StyleSheet, 
  TouchableOpacity,
  View
  } from 'react-native';
import { 
  React, 
  useState, 
  useEffect 
  } from 'react';
import { 
  ListItem, 
  Text 
} from '@rneui/themed';
import { obterHistorico } from '../../service/OracleCloudService';

export default function Historico() {

    const [updateHistorico, setUpdateHistorico] = useState(0)
    const [resultados, setResultados] = useState([])
    
    useEffect(() => {
    // define a função
    const fazBusca = async () => {
    const data  = ( await obterHistorico() ).data.items
     setResultados(data)
      }
    // execução incondicional
      fazBusca()
      console.log("Atualizado")
    }, [updateHistorico])
    
    const renderItem = ({ item }) => (
      
      <ListItem style={ styles.listItem }>
          <ListItem.Title style={ styles.itens } theme={styles.itens }>{
              item.datapesquisa.substring(8,10) +
              '/' + item.datapesquisa.substring(5,7) +
              '/' + item.datapesquisa.substring(0,4)
            }
          </ListItem.Title>
          <ListItem.Subtitle style={ styles.itens }>
              {item.cidade}
          </ListItem.Subtitle>
      </ListItem>
    )
    const keyExtractor = ( item,cod_historico) => cod_historico ;
    return (
              <FlatList
                style={styles.container}
                data={ resultados } 
                keyExtractor={ keyExtractor }
                renderItem={ renderItem }

              ListFooterComponent={ 
                <TouchableOpacity 
                  onPress={(e) => setUpdateHistorico(updateHistorico + 1)}
                  style={ styles.roundButton }>
                  <View style={styles.buttonStyle}>
                    <Text style={{ fontSize:13 }}>
                      Atualizar
                    </Text>
                  </View>
                </TouchableOpacity>
              }

              ListFooterComponentStyle={{
                marginLeft:280,
                }}
              />
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    itens: {
      fontSize:20,
      color:'black'
    },
    listItem:{
      flex:1,
      marginTop: 15
    },
    buttonStyle:{
      marginBottom:15,
      marginTop: 15,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      textAlign:'center'
    },
    roundButton: {
      backgroundColor:'rgba(174,186,202,0.55)',
      width: 95,
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      borderWidth:1,
      borderColor: 'black',
      marginBottom:10,
      marginTop: 15
    },
  });