
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

    getListing(){
      return this.listing;
    }

  private listing: any[] = [
  {
    "name": "1 - Artistes Musiciens",
    "desc": "Frais liés à l'instruement de musique. Achat, entretien et frais annexes, plus les interets d'emprunt",
    "array": 0,
    "idcollapse": 0,
    "route": "revenu",
    resultat : 0,
    type : 1,
  },
  {
    "name": "2 - Frais de représentation",
    "desc": "Frais vestimentaires et de coiffure, de représentation, de communications téléphoniques professionnelles, de formation et de fournitures diverses (partitions, pupitre...)",
    "array": 1,
    "idcollapse": 1,
    "route": "representation",
    resultat : 0,
    type : 2,
  },
  {
    "name": "3 - Frais de transport",
    "desc": "Frais de transport entre le domicile et le lieux de travail.",
    "array": 2,
    "idcollapse": 2,
    "route": "Km",
    resultat : 0,
    type : 3,
  },
  {
    "name": "4 - Autres frais de transport",
    "desc": "Deplacement entre un logement provisoire et le lieu de travail.",
    "array": 3,
    "idcollapse": 3,
    "route": "autres_frais_transport",
    resultat : 0,
    type : 4,
  },
  {
    "name": "5 - Frais de repas",
    "desc": "Frais supplementaires de repas sur le lieu de travail.",
    "array": 4,
    "idcollapse": 4,
    "route": "repas",
    resultat : 0,
    type : 5,
  },
  {
    "name": "6 - Frais de repas en déplacement",
    "desc": "A preciser.",
    "array": 5,
    "idcollapse": 5,
    "route":"repas_dep",
    resultat : 0,
    type : 6,
  },
  {
    "name": "7 - Frais de documentation",
    "desc": "A preciser.",
    "array": 6,
    "idcollapse": 6,
    "route":"documentation",
    resultat : 0,
    type : 7,
  },
  {
    "name": "8 - Frais de local professionnel",
    "desc": "Frais de matériel, mobilier et fournitures autres que celles visées au 2 ci-dessus",
    "array": 7,
    "idcollapse": 7,
    "route": "habitation",
    resultat : 0,
    type : 8,
  },
  {
    "name": "9 - Frais de Materiel",
    "desc": "Frais de matériel, mobilier et fournitures autres que celles visées au 2 ci-dessus",
    "array":8,
    "idcollapse": 8,
    "route": "materiel",
    resultat : 0,
    type : 9,
  },
  {
    "name": "10 - Cotisations professionnelles",
    "desc": "A preciser.",
    "array":9,
    "idcollapse": 9,
    "route": "cotisation",
    resultat : 0,
    type : 10,
  },
  {
    "name": "11 - Autres Frais",
    "desc": "A preciser.",
    "array":10,
    "idcollapse": 10,
    "route": "autres_frais",
    resultat : 0,
    type : 11,
  },  
      ]
  constructor() {}
}
