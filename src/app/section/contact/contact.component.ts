import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'; // Library import karein

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // HttpClientModule nikal diya
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.contactForm.controls; }

  async sendMessage() {
  this.submitted = true;
  if (this.contactForm.invalid) return;

  this.loading = true;

  const SERVICE_ID = 'service_dzwdxpf';
  const TEMPLATE_CONTACT = 'template_l8xco2d';
  const TEMPLATE_AUTOREPLY = 'template_dnwrdt5';
  const PUBLIC_KEY = 'O-a7Z6wM-ZVP0T5MQ'; // Apni Public Key yahan likhein

  try {
    // 1️⃣ Pehli Email (Aapko notification milay gi)
    await emailjs.send(SERVICE_ID, TEMPLATE_CONTACT, {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      message: this.contactForm.value.message
    }, PUBLIC_KEY);

    // 2️⃣ Doosri Email (User ko auto-reply jayegi)
    // In variables ke naam wahi hain jo aapke HTML template mein hain
    const autoReplyParams = {
      to_email: this.contactForm.value.email, // Dashboard Settings mein {{to_email}} hona chahiye
      from_name: this.contactForm.value.name, // Aapke HTML mein {{from_name}} hai
      message: this.contactForm.value.message  // Aapke HTML mein {{message}} hai
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_AUTOREPLY, autoReplyParams, PUBLIC_KEY);

    alert('✅ Emails sent! Check your inbox and the test user inbox.');
    this.contactForm.reset();
    this.submitted = false;
  } catch (error) {
    console.error('Email Error:', error);
    alert('❌ Error: ' + JSON.stringify(error));
  } finally {
    this.loading = false;
  }
}}