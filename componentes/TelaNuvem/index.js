import React from 'react';
import {View, Image, Text , Pressable,ImageBackground} from 'react-native';

import imgFundo from '../../assets/fundo-xcloud.png';
import img1 from '../../assets/xcloud-2.png';
import estilo from './estilos';

export default function TelaNuvem(){
    return(
        <ImageBackground source={imgFundo} style={estilo.container}>
            <Text style={estilo.titulo}>Xbox Cloud Gaming</Text>
            <Text style={estilo.subtitulo}>Serviço de streaming de jogos</Text>
            <Text style={estilo.descricao}>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>
            <Text style={estilo.descricao}>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>
            <Text style={estilo.descricao}>Através de uma assinatura você terá um XBOX virtual sempre que precisar.</Text>
            <Image source={img1} style={estilo.image}/>
        </ImageBackground>
    )
}