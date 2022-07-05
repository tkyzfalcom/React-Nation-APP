import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    titulo : string, 
    corTexto:string 
};

export function Botao({ titulo, corTexto, ...rest } : ButtonProps) {

    return(
    <TouchableOpacity
        style={[styles.button]}
        {...rest}
    >
        <Text style={[styles.buttonText,{color:corTexto}]}>
            {titulo}
        </Text>
    </TouchableOpacity>
    )
}