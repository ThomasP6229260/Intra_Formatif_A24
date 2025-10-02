import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function commentV(nom : string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const courriel = control.value;
    // On regarde si le champ est rempli avant de faire la validation
    if (!courriel) {
      // On attend que le champ soit rempli avant de le valider
      return null;
    }
    // On fait notre validation. Includes retourne un booléen.
    const estValide = courriel.split(" ").length >= 10;
    const estValide1 = !courriel.Includes(nom);

    
    // On retourne null si c'est valide, ou un objet décrivant l'erreur sinon
    return estValide  && estValide1? null : { commentV: true };
  };
}