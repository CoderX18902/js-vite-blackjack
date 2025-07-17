/**
 * Esta funciona retorna un valor de carta
 * @param {String} carta recibe un String Ejemplo: "KS"
 * @returns {Number} retorna number 
 */
export const valorCarta = ( carta ) => {
     if (!carta ) throw new Error 
    ( "Es necesario un valor de carta" );
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;

    
}