import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  //template driven Form exemple 
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

  //Réactive Formulaire
  profilForm: FormGroup; // Vous devez déclarer le type de votre formulaire

  constructor(private formBuilder: FormBuilder) {
    this.profilForm = new FormGroup({
       //le champs doit être automatiquement rempli pour appuyer sur le bouton 
      firstname: new FormControl('toto', Validators.required),

    });

    //ajoute un champs directement dans le formulaire dynamique 
    this.profilForm.patchValue({
      firstname: 'TATA',
    });
  }
  
  ////Réactif Formulaire 2
  // formulaire: FormGroup;

  // constructor(private formBuilder: FormBuilder) {
  //   // Initialisez le formulaire avec les champs et les validateurs souhaités
  //   this.formulaire = this.formBuilder.group({
  //     nom: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     message: ['']
  //   });
  // }

  // // Gérez la soumission du formulaire
  // onSubmit2() {
  //   if (this.formulaire.valid) {
  //     // Vous pouvez accéder aux valeurs du formulaire avec this.formulaire.value
  //     console.log('Données du formulaire soumises :', this.formulaire.value);
  //     // Ici, vous pouvez effectuer une action telle qu'envoyer les données à un serveur
  //   }
  // }
  








}
