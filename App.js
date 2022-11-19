import Pesquisar from './pages/Pesquisar';
import Historico from './pages/Historico';
import { ImageBackground,Dimensions } from 'react-native'
import React from 'react';
import { Tab, TabView } from '@rneui/themed';

const width = Dimensions.get("window").width;

export default () => {
const [index, setIndex] = React.useState(0);

return (
  <>
  
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Pesquisar"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Historico"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
      />

    </Tab>
    
    <TabView value={index} onChange={setIndex} animationType="spring">
    
      <TabView.Item style={{ flex:1 ,width: width }}>
      <ImageBackground
              source={{uri: "https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"}}
              style={{flex:1,resizeMode:"cover" }}
            >
        <Pesquisar/>
        </ImageBackground>
      </TabView.Item>
      
      <TabView.Item style={{ flex:1, width: width }}>
      <ImageBackground
              source={{uri: "https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"}}
              style={{flex:1,resizeMode:"cover" }}
            >
        <Historico/>
        </ImageBackground>
      </TabView.Item>
      
    </TabView>
    
  </>
);
};
