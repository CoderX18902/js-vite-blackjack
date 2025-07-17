

/**
 * Esta funcion pide un carta del deck
 * @param {Array<String>} deck 
 * @returns {Array<String} retorna un nuevo deck
 */
export const pedirCarta = (deck) => {
     if (!deck || deck.length === 0) throw new Error 
    ( "Es necesario un arreglo de cartas string" );
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    
    return carta;

}