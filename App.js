import React, {useEffect , useState} from 'react';
import { View , Text , FlatList,ActivityIndicator} from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes';

export default function App() {
  const [load, setLoad] = useState(true)
  const [filmes, setFilmes] = useState([])

  useEffect(() =>{
    async function loadFilmes()
    {
      const response = await api.get('r-api/?api=filmes')
      console.log(response.data)
      setFilmes(response.data)
      setLoad(false)
    }

    loadFilmes()

  }, [])

  if(load){
    return(
      <View style ={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator color='blue' size ={40}/>
      </View>
    )
  }

  else{
    return (
      <View>
        <FlatList
        data ={filmes}
        keyExtractor ={item => String(item.id)}
        renderItem ={({item}) =><Filmes data = {item}/>}/>
      </View>
      );
  }
}