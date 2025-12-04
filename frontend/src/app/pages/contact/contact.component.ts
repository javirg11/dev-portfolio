import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSending = false;
  successMessage = '';
  errorMessage = '';

  private emailServiceId = 'service_h6up846';
  private emailTemplateId = 'template_zube66e';
  private emailPublicKey = 'lGrWJnAYFTJoRQ1LI';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.maxLength(150)]],
      message: ['', [Validators.required, Validators.maxLength(2000)]],
    });
  }

  onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      this.errorMessage = 'Por favor, rellena correctamente los campos obligatorios.';
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;

    const formValues = this.contactForm.value;

    const templateParams = {
      name: formValues.name,
      email: formValues.email,
      subject: formValues.subject || '(Sin asunto)',
      message: formValues.message,
    };


    emailjs
      .send(this.emailServiceId, this.emailTemplateId, templateParams, {
        publicKey: this.emailPublicKey,
      })
      .then(
        () => {
          this.isSending = false;
          this.successMessage = 'Tu mensaje se ha enviado correctamente. ¡Gracias por contactar!';
          this.contactForm.reset();
        },
        (error) => {
          console.error('Error al enviar el email:', error);
          this.isSending = false;
          this.errorMessage =
            'Ha habido un problema al enviar tu mensaje. Por favor, inténtalo de nuevo en unos minutos.';
        }
      );
  }
}
