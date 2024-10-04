/*ex4 solution*/
const pureInsert = (id, nom, filiere, position, inscription) => {
  const nouveauTableau = [...inscription]; 
  const nouvelleInscription = { id, nom, filiere };
    nouveauTableau.splice(position, 0, nouvelleInscription);
    return nouveauTableau;
  };
 
  const inscription = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },


  ];
  
  const nouvellesInscriptions = pureInsert(13, 'IBRAHIMI', 'DEVOWFS', 2, inscription);
  console.log(nouvellesInscriptions);
  
  const pureDeleteByPosition = (position, inscription) => {
    const nouveauTableau = [...inscription]; // Copie du tableau original
    nouveauTableau.splice(position, 1); // Suppression d'un élément à la position donnée
    return nouveauTableau;
  };
  
  const pureDeleteById = (inscriptions, id) => {
    let clonedInscriptions = [...inscriptions];
    let index = clonedInscriptions.findIndex(
      (inscription) => inscription.id === id
    );
    clonedInscriptions.splice(index, 1);
    return clonedInscriptions;
  };
  // Exemple d'utilisation
  const inscriptionsSansID =pureDeleteById( inscription,10);
  console.log(inscriptionsSansID);
  

  const pureUpdateByPosition = (id, nom, filiere, position, inscription) => {
    const nouvelleInscription = { id, nom, filiere };
    const nouveauTableau = [...inscription]; // Copie du tableau original
    nouveauTableau.splice(position, 1, nouvelleInscription); // Remplacement de l'élément à la position donnée
    return nouveauTableau;
  };
  
  // Exemple d'utilisation
  const inscriptionsModifiees = pureUpdateByPosition(12, 'NAJI', 'DESIGN', 2, inscriptions);
  console.log(inscriptionsModifiees);
  
