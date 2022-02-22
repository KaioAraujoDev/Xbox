import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
    },
    images:{
        width:200,
        height:200,
        resizeMode:'contain',
        marginTop:20,
    },
    titleConsole:{
        fontSize:25,
        color:'rgba(17,125,15,255)',
        marginVertical:10,
        fontWeight:'bold',
    },
    subtitle:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:10,
    },
    descricao:{
        textAlign:'justify',
    }
})

export default estilo;