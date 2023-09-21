import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  //ngFor
  public books=['Book1', 'Book2'];

  //ngIff
  public afficherMessage: boolean = true;
  public tata:boolean=false;

  //pipe
  dateActuelle: Date = new Date();
  texte: string = 'Exemple de texte';
  texteLong: string = 'Ceci est un texte plus long qui sera tronqué.';
  nombres: number[] = [5, 2, 8, 1, 9];
  montant: number = 1234.5678;
  nombresTries: number[] = this.nombres.slice().sort((a, b) => a - b);
  nombresJoines: string = this.nombres.slice(0, 3).join(', ');

  //template driven From
  public favoriteColor:string='';
  public setValue(){
    this.favoriteColor='Red';
    console.log(this.favoriteColor);
  }

  formData = {
    name: '',
    email: '',
  };

  public submitted=false;
  onSubmit(form: any) {
    if (form.valid) {
      // Traitez les données du formulaire ici (par exemple, envoyez-les à un service ou affichez-les)
      console.log('Données du formulaire:', this.formData);
      this.submitted = true;
    }
  }



}
