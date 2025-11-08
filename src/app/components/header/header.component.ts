import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-1.5 bg-gradient-to-r from-pride-red via-pride-orange via-pride-yellow via-pride-green via-pride-blue to-pride-purple fixed top-0 left-0 right-0 z-50"></div>
    
    <nav class="fixed top-1.5 left-0 right-0 bg-white/95 backdrop-blur-md z-40 shadow-sm">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <ul class="flex justify-center gap-8">
          <li *ngFor="let item of navItems">
            <a 
              [href]="'#' + item.id" 
              (click)="scrollToSection($event, item.id)"
              [class.text-pride-blue]="activeSection === item.id"
              class="text-gray-800 font-medium hover:text-pride-blue transition-colors duration-300 relative group">
              {{ item.label }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-pride-purple group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {
  activeSection = 'about';
  
  navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sections = this.navItems.map(item => item.id);
    const scrollPosition = window.pageYOffset + 200;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }
}