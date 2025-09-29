import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Layout } from '../../core/services/layout';

@Component({
  selector: 'bo-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  fg: FormGroup
  domainsAllowed = ["company.com", "pe.company.com", "cl.company.com"];

  constructor(private router: Router, private layout: Layout) {
    this.layout.showMenu = false
    this.layout.showHeader = false

    this.fg = new FormGroup({
      email: new FormControl(null, [Validators.required, this.validatorEmail, this.validatorGenericDomain(this.domainsAllowed) /* this.validatorEmailCompany */]),
      password: new FormControl(null, [Validators.required, /* Validators.pattern(/^[a-zA-Z0-9]{4,}$/), */ this.validatorPassword]),
      //confirmPassword: new FormControl(null, [Validators.required, this.validatorPassword])
    }, [/* this.validatorMatchPasswords */]);
  }

  save() {
    const message = this.fg.valid ? "Form is valid" : "Form is invalid"
    //alert(message)
    console.log(this.fg)
    console.log(this.fg.value)
    console.log(this.fg.getRawValue())
    //console.log(this.fg.controls)
    const summary = Object.values(this.fg.controls).map(control => control.errors ? Object.values(control.errors) : []).flat()
    console.log(summary)

    this.router.navigate(["/dashboard"])
  }

  validatorEmail(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.value) return null

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return !regex.test(control.value) ? { emailInvalid: "Invalid email format" } : null
  }

  validatorPassword(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.value) return null

    const regex = /^[a-zA-Z0-9]{4,}$/;

    return !regex.test(control.value) ? { passwordInvalid: "The password must match the pattern: ^[a-zA-Z0-9]{4,}$ " } : null
  }

  validatorEmailCompany(control: AbstractControl): ValidationErrors | null {
    const domainsAllowed = ["company.com", "pe.company.com", "cl.company.com"];

    if (!control || !control.value) return null

    const domain = control.value.split("@")[1];

    return !domainsAllowed.includes(domain) ? { emailNotAllowed: `Email domain is not allowed: ${domain}. Allowed domains are: ${domainsAllowed.join(", ")}` } : null
  }

  validatorGenericDomain(domainsAllowed: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control || !control.value) return null

      const domain = control.value.split("@")[1];

      return !domainsAllowed.includes(domain) ? { emailNotAllowed: `Email domain is not allowed: ${domain}. Allowed domains are: ${domainsAllowed.join(", ")}` } : null
    }
  }

  validatorMatchPasswords(group: AbstractControl): ValidationErrors | null {
    const ctrlPassword = group.get("password");
    const ctrlConfirmPassword = group.get("confirmPassword");

    if (!ctrlPassword || !ctrlConfirmPassword) return null
    if (!ctrlPassword.value || !ctrlConfirmPassword.value) return null

    if (ctrlPassword.value !== ctrlConfirmPassword.value) {
      //ctrlConfirmPassword.setErrors({ passwordMismatch: "Passwords do not match" })
      return { passwordMismatch: "Passwords do not match" }
    }

    return null
  }
}
