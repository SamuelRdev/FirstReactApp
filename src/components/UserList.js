
const UserList = (props) => {

    return (
        <div>
            <h1>Nouveaux composants/liaisons parents enfants</h1>
            <ul>    
                <li>Créer un composant</li>
                <li>L'exporter</li>
                <li>L'importer dans index</li>
                <li>L'imvoquer avec nomComposant entre balise simple</li>
                <li>{props.lesProps} - {props.description}</li>
                <li>
                    <ul>
                        <h3>Les state(états)</h3>
                        <li>import React, crochetuseStatecrochet from 'react';</li>
                        <li>créer le state</li>
                        <li>l'invoquer et cérer une foncton dynamique</li>
                        <li>créer la fonction dynamique</li>  
                    </ul>
                </li>
                <h4>Exemple d'un compteur:</h4>

            </ul>
       </div>
    )
}

export default UserList