export class ArtisteMusiciens{
    montantRemunerationNet: number;
    montantAllocationChomage: number;
    total: number;
}

export class MontantFraisRepresent{
    montantFraisRepresent: number;
    total: number;
}

export class MontantFraisTransports{
    ChoixVehicule: string;
    nbKmInf5: number;
    nbKm5_20: number;
    nbKmSup20: number;
    total: number;
}

export class MontantFraisAutresFraisTrans {
    montantAutresFraisTrans: number;
    total: number;
}

export class MontantRepas {
    montantTotalRepas: number;
    nombreRepas: number;
    total: number;
}

export class MontantRepasDep {
    montantTotalRepasDep: number;
    nombreRepasDep: number;
    total: number;
}

export class MontantSurfacePro {
    adresse : string;
    CP: number;
    ville: string;
    loyer: number;
    SurfaceTotale: number;
    SurfacePro: number;
    total: number;
}

export class MontantFraisPro {
    montantFraisPro : number;
    total: number;
}

export class MontantFraisTotalDocu {
    montantFraisTotalDocu: number;
    total: number;
}
export class MontantFraisMateriel{
    montantFraisMateriel: number;
    total: number;
}

export class MontantCotisationPro{
    montantCotisationPro: number;
    total: number;
}

export class MontantAutresFrais{
    montantAutresFrais: number;
    total: number;
}


export class Frais {
    
    montantArtisteMusiciens : ArtisteMusiciens;

    montantFraisRepresent : MontantFraisRepresent;

    montantFraisTransport : MontantFraisTransports;

    montantautresFraisTrans : MontantFraisAutresFraisTrans;

    montantRepas : MontantRepas;

    montantRepasDep: MontantRepasDep;

    montantFraisTotalDocu: MontantFraisTotalDocu;

    montantSurfacePro: MontantSurfacePro;

    montantFraisMateriel: MontantFraisMateriel;

    montantCotisationPro: MontantCotisationPro;

    montantAutresFrais: MontantAutresFrais;


    
}

