import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  formGroup = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required]),
    'terms': new FormControl('', [Validators.requiredTrue]),
  })

  formClass: string = 'form-container';
  showPassword: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("Form: ", this.formGroup.value)
    this.formClass = this.formGroup.valid ? 'form-container' : 'form-container-error';
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
