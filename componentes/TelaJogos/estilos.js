import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    containerMain:{
        backgroundColor:'rgba(2,2,2,0.8)',
        paddingHorizontal:15,
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    containerInfo:{
        marginBottom:20,
        alignItems:'center',
        width:275
    },
    images:{
        width:275,
        height:150,
    },
    titulo:{
        fontSize:25,
        color:'rgba(17,125,15,255)',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20,
        marginBottom:10,
    },
    descricaoMain:{
        color:'rgba(228,228,228,1)',
        textAlign:'justify',
    },
    tituloImage:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        paddingStart:10,
    },
    descricaoInfo:{
        color:'rgba(228,228,228,1)',
        textAlign:'justify',
        marginTop:10,
        fontSize:12
    }
})

export default estilo;