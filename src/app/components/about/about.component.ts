import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="min-h-screen flex flex-col justify-center px-6 py-32 max-w-6xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-bold mb-4 text-gradient">
        Jennifer González Alzate - Full-Stack Software Engineer
      </h1>
      <p class="text-2xl text-gray-600 mb-8">
        Building elegant, scalable solutions across the stack
      </p>
      
      <div class="space-y-6 max-w-4xl">
        <p class="text-lg text-gray-700 leading-relaxed">
          With over ten years of experience as a Full-Stack Software Engineer, I thrive on building elegant, 
          end-to-end solutions to complex problems. I architect and build dynamic frontends with Angular and Vue, 
          and robust backend systems with TypeScript, Node.js, and microservices. I am passionate about leveraging 
          the full cloud ecosystem, using tools like Docker and GCP to create efficient, scalable applications.
        </p>
        
        <p class="text-lg text-gray-700 leading-relaxed">
          My career has taken me across the globe—from Colombia and Brazil to Australia and Germany—fostering my 
          adaptability and making me fluent in four languages. When I'm not coding, you can find me cycling, on the 
          soccer field, or connecting with fellow innovators at tech talks and conferences, always seeking to learn and grow.
        </p>
      </div>

      <div class="flex flex-wrap gap-4 mt-8">
        <span *ngFor="let lang of languages" 
              class="px-5 py-2.5 rounded-full font-medium bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          {{ lang }}
        </span>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {
  languages = ['🇬🇧 English', '🇪🇸 Spanish', '🇩🇪 German', '🇧🇷 Portuguese'];
}