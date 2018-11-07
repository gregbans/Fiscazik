export class ArtisteMusiciens{
    montantRemunerationNet: number;
    montantAllocationChomage: number;
}

export class MontantFraisTransports{
    ChoixVehicule: string;
        nbKmInf5: number;
        nbKm5_20: number;
        nbKmSup20: number
}

export class MontantRepas {
    montantTotalRepas: number;
        nombreRepas: number
}

export class MontantRepasDep {
    montantTotalRepasDep: number;
    nombreRepasDep: number
}

export class MontantSurfacePro {
    adresse : string;
    CP: number;
    ville: string;
    loyer: number;
    SurfaceTotale: number;
    SurfacePro: number;
}

export class Frais {
    montantSuperTotal : number;
    
    montantArtisteMusiciens : ArtisteMusiciens;

    montantFraisPro :number;

    montantFraisTransport : MontantFraisTransports

    montantRepas : MontantRepas;

    montantRepasDep: MontantRepasDep;

    montantFraisTotalDocu: number;

    montantSurfacePro: MontantSurfacePro;

    montantFraisMateriel: number;

    MontantCotisationPro: number;

    MontantAutresFrais: number;
    
}

