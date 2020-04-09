import React from 'react';

class AffichageCitation extends React.Component {

    render() {
        return (
            <div>
               <p>
                {/* sert toi de l'objet citations et va chercher le texte de citation1*/}
                {/* { this.state.citations.citation1.citation } */}

                {/* affiche citation aleatoire retourne par recupererCitation*/}
                {/* this.props.details   recupere le this.state de App.js*/}
                { this.props.details.citation}

                    <span>Auteur : { this.props.details.auteur } </span>
                </p>
            </div>
        )
    }
}

export default AffichageCitation;