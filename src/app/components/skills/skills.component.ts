import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  category: string;
  color: string;
  technologies: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="min-h-screen flex flex-col justify-center px-6 py-32 max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
        Skills & Technologies
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div *ngFor="let skill of skills" 
             class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <h3 [class]="'text-2xl font-semibold mb-6 ' + skill.color">
            {{ skill.category }}
          </h3>
          <div class="flex flex-wrap gap-3">
            <span *ngFor="let tech of skill.technologies" 
                  class="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      category: 'Frontend Development',
      color: 'text-pride-red',
      technologies: ['Angular', 'Vue.js', 'TypeScript', 'Cypress E2E', 'Responsive Design']
    },
    {
      category: 'Backend Development',
      color: 'text-pride-blue',
      technologies: ['Node.js', 'TypeScript', 'Microservices', 'RESTful APIs', 'MCP Servers']
    },
    {
      category: 'Cloud & DevOps',
      color: 'text-pride-green',
      technologies: ['Google Cloud Platform', 'Docker', 'Terraform (IaC)', 'CI/CD', 'Kubernetes']
    },
    {
      category: 'AI & Emerging Tech',
      color: 'text-pride-purple',
      technologies: ['MCP (Model Context Protocol)', 'RAG Systems', 'AI Integration', 'Machine Learning']
    }
  ];
}