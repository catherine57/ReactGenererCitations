// code React
//alert("coucou");

import React from 'react';

import citations from '../citations';
import AffichageCitation from './AffichageCitation';

class App extends React.Component {

    state = {
        //citation: 'je suis une citation en dure',
        //auteur: 'cath' 
     };

    /***  Gestion CYCLE DE VIE  **********************************
     * componentDidCatch   componentDidMount  componentDidUpdate
    * componentWillUpdate  componentWillReceiveProps  componentWillUnmount  
    *************************************************************/
   // AVANT le lancement
    componentWillMount(){
        alert('je recupere la premiere citation avant lancement');
        this.recupereCitation();
    }
    // Mise à jour
    componentWillUpdate(){
        alert('mise a jour');
    }

    recupereCitation = click => {
        // convertir objet en array pour pouvoir selectionner
        const keys = Object.keys( citations ); // keys methode recuper clé
        console.log("les cles array citations :  "+keys);
        //  Une citation par nb au hazard
        const randomKeys = keys[Math.floor(Math.random() * keys.length)] ;
        console.log("le nb random :  "+ randomKeys);

        // si la citation actuelle et la meme que la citation random generer 
        // relance recuparation et ne retourne rien
        if ( this.state.citation === citations[ randomKeys].citation ) {
            this.recupereCitation();
            return '';
        }
        this.setState(
            citations[ randomKeys ] 
        );
    };

    render() {
        console.log(citations);
        return (
            <div>
                <h3>Je suis du JSX compilé par babel,  pas du HTML</h3>    
                
                {/* details = les props donnée transmise à AffichageCitation */}
                <AffichageCitation details={ this.state} />

                 {/* this:sert toi de la class->recuperCitation on click */}
                <button 
                onClick={ ev => this.recupereCitation(ev) }
                > Une autre citation</button>
            </div>
        )
    }

}

/*** Renvoi a la vue se trouve dans index.js***/  
/***  EXPORT a index.js */
export default App;