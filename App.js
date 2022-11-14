import Pesquisar from './telas/Pesquisar'
import Historico from './telas/Historico';

import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';

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
      <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
        <Text h1>Pesquisar</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
        <Text>{Historico}</Text>
      </TabView.Item>
    </TabView>
  </>
);
};
