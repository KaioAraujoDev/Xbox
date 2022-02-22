import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
    },
    image:{
        width:300,
        height:175,
        borderRadius:5,
    },
    titulo:{
        fontSize:20,
        color:'rgba(17,125,15,255)',
        fontWeight:'bold',
        marginBottom:5
    },
    subtitulo:{
        fontSize:16,
        color:'white',
        marginBottom:25,
    },
    descricao:{
        textAlign:'center',
        color:'rgba(228,228,228,1)',
        marginBottom:10,
        fontSize:12,
    }
})
export default estilo;