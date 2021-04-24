import {  Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../Hooks/useCalculadora';
import React from 'react'

export const CalculadoraScreen = ( ) => {
      
const {
    numeroAnterior,
    numero,
    limpiar,
    armarNumero,
    calcular,
    btnMultiplicar,
    btnDelete,
    btnDividir,
    btnRestar,
    btnSumar,
    PositivoNegativo
    
} = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
             (numeroAnterior !=='0') && <Text style={styles.resultadoPequenio}>{numeroAnterior}</Text>
            }

            <Text style={styles.resultado} adjustsFontSizeToFit numberOfLines={1} >{numero}</Text>


            <View style={styles.fila}>
               <BotonCalc texto="C" color="#9B9B9B" accion={limpiar}/>
               <BotonCalc texto="+/-" color="#9B9B9B" accion={PositivoNegativo} />
               <BotonCalc texto="del"  color="#9B9B9B" accion={btnDelete} />
               <BotonCalc texto="/" color="#FF9427" accion={btnDividir} />
            </View>
            <View style={styles.fila}>
               <BotonCalc texto="7" accion={armarNumero} />
               <BotonCalc texto="8" accion={armarNumero} />
               <BotonCalc texto="9" accion={armarNumero} />
               <BotonCalc texto="X" accion={btnMultiplicar} color="#FF9427"/>
            </View>
            <View style={styles.fila}>
               <BotonCalc texto="4" accion={armarNumero} />
               <BotonCalc texto="5" accion={armarNumero} />
               <BotonCalc texto="6" accion={armarNumero} />
               <BotonCalc texto="-" color="#FF9427" accion={btnRestar} />
            </View> 
            <View style={styles.fila}>
               <BotonCalc texto="1" accion={armarNumero} />
               <BotonCalc texto="2" accion={armarNumero} />
               <BotonCalc texto="3" accion={armarNumero} />
               <BotonCalc texto="+" color="#FF9427" accion={btnSumar} />
            </View>
            <View style={styles.fila}>
               <BotonCalc texto="0" ancho accion={armarNumero} />
               <BotonCalc texto="." accion={armarNumero} />
               <BotonCalc texto="=" color="#FF9427" accion={calcular} />
            </View>
        </View>
    )

}
