/*ex3 solution*/
const inscriptions = [
    { id: 10, nom: "ALAMI", filiere: "DEVOWFS", frais: 500 },
    { id: 11, nom: "RAJI", filiere: "DEVOWFS", frais: 900 },
    { id: 12, nom: "NAJI", filiere: "DEVOWFS", frais: 100 },
    { id: 13, nom: "IBRAHIMI", filiere: "DEVOWFS", frais: 400 },
  ];
  let pureAppendInscription=()=>{
    let resultats=[...inscriptions]
    //return resultats.push({id:18,nom:'KABIRI',filiere:'ESA'})
    return [...inscriptions,{id:18,nom:'KABIRI',filiere:'ESA',frais: 800}]
}


console.log(pureAppendInscription())


  //la somme les frais
  const totalFrais = inscriptions.reduce((total, inscription) => {
    return total + inscription.frais;
  }, 0);
  console.log(totalFrais);
  