import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { commentV } from './validators/commentV';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [MatToolbarModule, MatIconModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class AppComponent {
  formGroup : FormGroup;
  title = 'reactive.form';
  
  

  constructor(
    private formBuilder : FormBuilder
  ) {  this.formGroup = this.formBuilder.group(
      {
        // courriel: ['', [Validators.required, Validators.email],
         nom: ['', [Validators.required],],
         roadNumber: ['', [Validators.required, Validators.min(1000), Validators.max(9999)]],
         postalcode : ['', [Validators.required, Validators.pattern('^[A-Z][0-9][A-Z][ ]?[0-9][A-Z][0-9]$') ]],
         comments : ['', [commentV("Alice"), ]]
         
      },
    );}
}


