import react,{ useState,useRef } from 'react'


enum Operadores{

suma, resta, multiplicar, dividir
    
}

export const useCalculadora = () => {
    
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');
    
    const ref = useRef<Operadores>();

    const ultimaOperacion = useRef <Operadores>()

    const limpiar = () =>{
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string)=>{
    
    // No aceptar doble Punto
    if(numero.includes('.') && numeroTexto === '.') return;

    if(numero.startsWith('0') || numero.startsWith('-0')){

        //Punto decimal
        if(numeroTexto === '.'){
            setNumero(numero + numeroTexto);

            //Evaluar si es otro cero,y hay un punto
        }else if(numeroTexto === '0' && numero.includes('.')){
            setNumero(numero + numeroTexto);
        
        //EVALUAR SI ES DIFERENTE DE 0 Y NO TIENE UN PUNTO
        }else if(numeroTexto !== '0' && !numero.includes('.')){
            setNumero(numeroTexto);
        
        //Evitar 0000.0
        }else if(numeroTexto === '0' && !numero.includes('.')){
            setNumero( numero);
        }else{
            setNumero(numero + numeroTexto);
        }

    }else{
        setNumero(numero + numeroTexto)
    }

    }

    const btnDelete = ()=>{

        let negativo= '';
        let numeroTemp= numero;

        if(numero.includes('-')){
            negativo = '-';
            numeroTemp = numero.substring(1);
        }

        if(numeroTemp.length > 1){
            setNumero(negativo + numeroTemp.slice(0,-1));
        }else {
            setNumero('0');
        }

    }

    const PositivoNegativo =() =>{
        if(numero.includes('-')){
            setNumero(numero.replace('-',''));
        }else{
            setNumero('-' + numero);
        }
    }

    const cambiarNumPorAnterior = () =>{
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1));
        }else{
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }
    
    const btnDividir=()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar=()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    
    const btnSumar=()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.suma;
    }
    const btnRestar=()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.resta;
    }

    const calcular = () =>{
        
    const num1 = Number (numero);
    const num2 = Number (numeroAnterior);

    switch (ultimaOperacion.current) {
        case Operadores.suma:
            setNumero(`${num1 + num2}`);
            break;
        case Operadores.resta:
            setNumero(`${num2 - num1}`);
            break;
        case Operadores.dividir:
            setNumero(`${num2 / num1}`);
            break;
        case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
        default:
            break;
    }
    
    setNumeroAnterior('0');

    if( num1 === 0 && num2 === 0) {
        return setNumero('0');
    } 

    if( num1 && !num2){
        return setNumero(`${num1}`)
    }

    }

    return{
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
        
    }

}
