import { StyleSheet } from 'react-native';
import React from 'react'


export const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor: 'black',
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    resultado:{
        color: 'white',
        fontSize:60,
        textAlign: 'right',
    },
    resultadoPequenio:{
        color: 'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign: 'right',
    },

    boton:{
      height: 80,
      width: 80,
      backgroundColor: '#2d2d2d',
      borderRadius: 100,
      justifyContent:'center',
      marginHorizontal: 10,
    },
    textboton:{
        color: 'white',
        padding: 10,
        textAlign: 'center',
        fontSize: 30,
        fontWeight:'300',

    },
    fila:{
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
        
    }
   
});