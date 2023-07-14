import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  checkoutForm = this.formBuilder.group({
    email: '',
    password: '',
  });
  constructor(
    private formBuilder: FormBuilder
  ) { }
  onSubmit(): void {
    // Process checkout data here
    if (this.checkoutForm.invalid) {
      alert('Email hoac mat khau khong trung khop!'); 
      this.checkoutForm.reset();
    }
    else {
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
    }
  }
}
