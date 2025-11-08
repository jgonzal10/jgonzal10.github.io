import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <section id="contact" class="min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 max-w-4xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
        Let's Connect
      </h2>
      
      <p class="text-lg text-gray-700 leading-relaxed mb-12 max-w-2xl">
        I'm always excited to connect with fellow innovators, discuss new opportunities, 
        or collaborate on interesting projects. Let's build something amazing together!
      </p>

      <a 
        href="https://www.linkedin.com/in/yourprofile" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pride-blue to-pride-purple rounded-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
        Connect on LinkedIn
      </a>
    </section>
  `,
  styles: []
})
export class ContactComponent {}