import { crearCartaHTML } from "./crear-cartaHTML";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * Esta funcion controla el turno de la computadora
 * @param {Number} puntosMinimos punto minimos que la computadora necesita
 * @param {HTMLElement}puntosHTML un elemnto HTML para mostrar los puntos
 * @param {HTMLElement}divCartasComputadora un elemento HTML para mostrar los cartas
 * @param {Array<String>}deck
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,  deck) => {

    let puntosComputadora = 0;
    if (!puntosMinimos ) throw new Error 
    ( "Son necesarios los puntosMinimos" );
    if (!puntosHTML ) throw new Error 
    ( "Son necesarios los puntosHTML" );
    if (!deck ) throw new Error 
    ( "Es necesario el deck" );
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}