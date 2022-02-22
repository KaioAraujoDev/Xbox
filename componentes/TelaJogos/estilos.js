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
        color:'white',
        textAlign:'justify',
    }
})

export default estilo;