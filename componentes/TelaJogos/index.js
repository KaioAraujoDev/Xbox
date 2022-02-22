import React from 'react';
import { View, Image, Text, Pressable, ScrollView, ImageBackground } from 'react-native';

import Jogo1 from '../../assets/jogo-3.png';
import Jogo2 from '../../assets/jogo-2.png';
import Jogo3 from '../../assets/jogo-4.png';

import estilo from './estilos';

export default function TelaJogos() {

    return (
        <ScrollView style={estilo.containerMain}>
            <View style={estilo.container}>
                <View style={estilo.containerInfo}>
                    <Text style={estilo.titulo}>Jogos em 4k</Text>
                    <Text style={estilo.descricaoMain}>Os principais jogos estão aqui veja abaixo três exemplos de grande sucesso.</Text>
                </View>

                <View style={estilo.containerInfo}>
                    <ImageBackground
                        source={Jogo1}
                        style={estilo.images}
                    >
                        <Text>Forza Horizon 5</Text>
                    </ImageBackground>
                    <Text>Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México. </Text>
                </View>
                <View style={estilo.containerInfo}>
                    <ImageBackground
                        source={Jogo2}
                        style={estilo.images}
                    >
                        <Text>Ciberpunk 2077</Text>
                    </ImageBackground>
                    <Text>Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.</Text>
                </View>
                <View style={estilo.containerInfo}>
                    <ImageBackground
                        source={Jogo3}
                        style={estilo.images}
                    >
                        <Text>Halo4</Text>
                    </ImageBackground>
                    <Text>Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.</Text>
                </View>

            </View>

        </ScrollView>
    )
}