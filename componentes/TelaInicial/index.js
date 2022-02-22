import React from 'react';
import {View, Image, Text , Pressable} from 'react-native';

import Logo from '../../assets/logo.png';
import Console1 from '../../assets/console-1.png';
import Jogo1 from '../../assets/jogo-1.png';
import xcloud1 from '../../assets/xcloud-1.png';

import estilo from './estilos';

export default function TelaInicial(props){
    return(
        <View style={estilo.container}>
            <Image source={Logo} style={estilo.imageLogo} />
            <Text style={estilo.titleLogo}>Xbox</Text>
            <Text style={estilo.descricaoTitle}>Xbox é uma marca de consoles criada pela Microsoft.Toque nos card para conhecer.</Text>
            <Pressable
                style={estilo.card}
                onPress={()=>{props.navigation.navigate('Consoles')}}
            >
                <Image source={Console1} style={estilo.imageButton}/>
                <Text style={estilo.cardTitle}>Conheça os consoles</Text>
            </Pressable>
            <Pressable
                style={estilo.card}
                onPress={()=>{props.navigation.navigate('Jogos')}}
            >
                <Image source={Jogo1} style={estilo.imageButton}/>
                <Text style={estilo.cardTitle}>Conheça os Jogos</Text>
            </Pressable>
            <Pressable
                style={estilo.card}
                onPress={()=>{props.navigation.navigate('XCloud')}}
            >
                <Image source={xcloud1} style={estilo.imageButton}/>
                <Text style={estilo.cardTitle}>Conheça o XCloud</Text>
            </Pressable>
        </View>
    )
}