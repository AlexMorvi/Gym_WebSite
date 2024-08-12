import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formulario!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.formulario = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // if (this.formulario.valid) {
    //   const { username, password } = this.formulario.value;

    //   this.authService.login(username, password).subscribe(
    //     (success) => {
    //       if (success) {
    //         this.successMessage = 'Login successful';
    //         this.errorMessage = '';
    //         this.router.navigate(['/dashboard']);
    //       } else {
    //         this.errorMessage = 'Login failed';
    //         this.successMessage = '';
    //       }
    //       this.hideMessagesAfterTimeout();
    //     },
    //     (error) => {
    //       this.errorMessage = 'An error occurred: ' + error.message;
    //       this.successMessage = '';
    //       this.hideMessagesAfterTimeout();
    //     }
    //   );
    // } else {
    //   this.errorMessage = 'Please fill out the form correctly.';
    //   this.successMessage = '';
    //   this.hideMessagesAfterTimeout();
    // }
  }

  showError(controlName: string): boolean {
    const control = this.formulario.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  private hideMessagesAfterTimeout(): void {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 3000);
  }
}
