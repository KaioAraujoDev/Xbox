import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(2,2,2,0.8)',
    },
    imageLogo:{
        borderRadius:50,
        width:100,
        height:100,
    },
    imageButton:{
        width:100,
        height:100,
    },
    titleLogo:{
        fontSize:25,
        color:'rgba(17,125,15,255)',
        marginVertical:10,
    },
    descricaoTitle:{
        fontSize:16,
        color:'white',
        textAlign:'justify',
        marginBottom:25,
    },
    card:{
        backgroundColor:'rgba(17,125,15,255)',
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
        borderRadius:10,
        width:300,
    },
    cardTitle:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    }
});

export default estilo;