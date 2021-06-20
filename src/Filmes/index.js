import React, {useState} from 'react';
import {View , Text, StyleSheet , Image, TouchableOpacity, Modal} from 'react-native';
import CustomModal from '../CustomModal';

export default function Filmes({data}) {
    const [visibleModal, setVisibleModal] = useState(false)
    
    return (
        <View style ={style.card}>
      
            <Text style ={style.titulo}>{data.nome}</Text>

            <Image
            source ={{uri: data.foto}}
            style={style.capa}/>

            <View style = {style.btnArea}>
                <TouchableOpacity style ={style.btn} onPress ={() => setVisibleModal(true)}>
                    <Text style ={style.btnTexto}>Leia mais</Text>
                </TouchableOpacity>
            </View>
        
        
            <Modal 
            animationType = 'slide' 
            visible ={visibleModal}
            transparent ={true}>
                <CustomModal filme ={data} voltar ={() =>setVisibleModal(false)}/>
            </Modal>
    </View>
    );
}

const style = StyleSheet.create({
    card:{
        margin:15,
        elevation:2,
        backgroundColor:'#FFF'
    },
    capa:{
        height: 250,
        zIndex:2
    },
    titulo:{
        padding: 15,
        fontSize:16
    },
    btnArea:{
        alignItems:'flex-end',
        marginTop:-45,
        zIndex:3
    },
    btnTexto:{
        textAlign:'center',
        color: '#fff'
    },
    btn:{
        width: 100,
        backgroundColor:'#09a6ff',
        opacity:1,
        borderTopLeftRadius:6,
        padding: 8
    }
})