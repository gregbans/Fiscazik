export class Frais {
    montantSuperTotal : number;
    
    montantArtisteMusiciens : {
        montantRemunerationNet: number,
        montantAllocationChomage: number,
    };

    montantFraisPro :number;

    montantFraisTransport : {
        ChoixVehicule: string,
        nbKmInf5: number,
        nbKm5_20: number,
        nbKmSup20: number
    };

    montantRepas : {
        montantTotalRepas: number,
        nombreRepas: number
    };

    montantRepasDep : {
        montantTotalDep: number,
        nombreRepasDep: number
    };

    montantFraisTotalDocu: number;

    montantSurfacePro:{
        adresse : string,
        CP: number,
        ville: string,
        SurfaceTotale: number,
        SurfacePro: number,
    }

    montantFraisMateriel: number;

    MontantCotisationPro: number;

    MontantAutresFrais: number;

}

