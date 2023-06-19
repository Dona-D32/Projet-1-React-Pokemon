import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = () => {
  return (
    <div className="card-list">
      <Card
        image="1_Pikachu.png"
        name="Pikachu"
        abilities={["Électricité Statique", "Paratonnerre"]}
      />

      <Card
        image="2_Bulbizarre.png"
        name="Bulbasaur"
        abilities={["Engrais", "Chlorophylie"]}
      />

      <Card
        image="3_Rondoudou.png"
        name="Jigglypuff"
        abilities={["Isograisse", "Peau Féérique"]}
      />

      <Card
        image="4_Carapuce.png"
        name="Sqirtle"
        abilities={["Torrent", "Coque Armure"]}
      />

      <Card
        image="5_Goupix.png"
        name="Vulpix"
        abilities={["Brasier", "Torche"]}
      />

      <Card
        image="6_Salamèche.png"
        name="Charmander"
        abilities={["Brasier"]}
      />

      <Card
        image="7_Herbizarre.png"
        name="Ivysaur"
        abilities={["Engrais", "Chlorophylie"]}
      />

      <Card
        image="8_Papilusion.png"
        name="Butterfree"
        abilities={["Écran Poudre", "Oeil Composé"]}
      />

      <Card
        image="9_Stari.png"
        name="Staryu"
        abilities={["Corps Sain", "Analyse"]}
      />

      <Card
        image="10_Arceus.png"
        name="Arceus"
        abilities={["Multitype"]}
      />
        <Card
        image="11_Dracaufeu.png"
        name="Charizard"
        abilities={["Brasier", "Turbo Brasier"]}
      />

      <Card
        image="12_Mentali.png"
        name="Espeon"
        abilities={["Synchro", "Attention"]}
      />

      <Card
        image="13_Léviator.png"
        name="Gyarados"
        abilities={["Intimidation", "Impudence"]}
      />

      <Card
        image="14_Psykokwak.png"
        name="Psyduck"
        abilities={["Glissade", "Benêt"]}
      />

      <Card
        image="15_Mewtwo.png"
        name="Mewtwo"
        abilities={["Pression", "Attention"]}
      />

      <Card
        image="16_Ronflex.png"
        name="Snorlax"
        abilities={["Médic Nature", "Benêt"]}
      />

      <Card
        image="17_Machoc.png"
        name="Machop"
        abilities={["Cran", "Attention"]}
      />

      <Card
        image="18_Mélodelfe.png"
        name="Clefairy"
        abilities={["Joli Sourire", "Peau Féérique"]}
      />

      <Card
        image="19_Miaouss.png"
        name="Meowth"
        abilities={["Ramassage", "Gloutonnerie"]}
      />

      <Card
        image="20_Onix.png"
        name="Onix"
        abilities={["Tête de Roc", "Glissade"]}
      />
    </div>
  )
}

export default CardList;
