import React from 'react';
import { View , Text, StyleSheet,TouchableOpacity} from 'react-native';

export default function CustomModal(props) {
    return (
        <View style ={style.container}>
            <View style ={style.modalContainer}>
                <TouchableOpacity style ={style.btn} onPress ={props.voltar}>
                    <Text style={{color:'#fff', fontSize:16}}>Voltar</Text>
                </TouchableOpacity>

                <Text style = {style.titulo}>{props.filme.nome}</Text>
                <Text style = {style.sinopse}>Sinopse</Text>
                <Text style = {style.desc}>{props.filme.sinopse}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10,
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    modalContainer:{
        height: '80%',
        width: '90%',
        backgroundColor:'#121212',
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    btn:{
        backgroundColor:'#e52246',
        padding:10,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    titulo:{
        textAlign:'center',
        color:'#fff',
        padding: 10,
        fontSize:28,
        fontWeight:'bold'
    },
    sinopse:{
        color:'#fff',
        fontSize:18,
        marginBottom:8,
        marginLeft:10
    },
    desc:{
        color:'#fff',
        marginLeft:10,
        marginRight:10
    }
})