import React from 'react';
import { ScrollView, View, Image, Text, Pressable } from 'react-native';

import imgConsole1 from '../../assets/console-1.png';
import imgConsole2 from '../../assets/console-2.png';
import estilo from './estilos';


export default function TelaInicial() {
    return (
        <ScrollView>
                <View style={estilo.container}>
                    <Image source={imgConsole1} style={estilo.images} />
                    <Text style={estilo.titleConsole}>XBOX SERIES S</Text>
                    <Text style={estilo.subtitle}>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
                    <Text style={estilo.descricao}>O Series S é pra quem busca jogos de nova geração gastando pouco. É o console mais barato da nova geração. Ele é o equilíbrio entre gráfico e performance</Text>
                </View>
                <View style={estilo.container}>
                    <Image source={imgConsole2} style={estilo.images} />
                    <Text style={estilo.titleConsole}>XBOX SERIES X</Text>
                    <Text style={estilo.subtitle}>O Xbox mais rápido e poderoso de todos os tempos.</Text>
                    <Text style={estilo.descricao}>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
                </View>
        </ScrollView>
    )
}