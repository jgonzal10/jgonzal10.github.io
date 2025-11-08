import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  borderColor: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="min-h-screen flex flex-col justify-center px-6 py-32 max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
        Featured Projects
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div *ngFor="let project of projects" 
             [class]="'bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-l-4 ' + project.borderColor">
          <h3 class="text-2xl font-semibold mb-4 text-gray-900">
            {{ project.title }}
          </h3>
          <p class="text-gray-700 leading-relaxed mb-6">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span *ngFor="let tech of project.technologies" 
                  class="px-3 py-1.5 rounded-full text-sm font-semibold bg-gray-100 text-gray-800">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'MCP Server Implementation',
      description: 'Built a Model Context Protocol (MCP) server using TypeScript, enabling seamless AI integration and context management for modern applications. Implemented robust error handling and scalable architecture patterns.',
      technologies: ['TypeScript', 'Node.js', 'MCP', 'AI'],
      borderColor: 'border-pride-blue'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Designed and implemented cloud infrastructure using Terraform, automating deployment processes and ensuring consistent, reproducible environments across multiple stages. Reduced deployment time by 70%.',
      technologies: ['Terraform', 'GCP', 'IaC', 'DevOps'],
      borderColor: 'border-pride-green'
    },
    {
      title: 'E2E Testing Framework',
      description: 'Developed comprehensive end-to-end testing suite using Cypress, covering critical user flows and ensuring application reliability. Achieved 95% test coverage with automated visual regression testing.',
      technologies: ['Cypress', 'TypeScript', 'E2E Testing', 'CI/CD'],
      borderColor: 'border-pride-purple'
    }
  ];
}