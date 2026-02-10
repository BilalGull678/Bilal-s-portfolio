import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})
export class TechStackComponent {
  stacks = [
  { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Django', icon: 'devicon-django-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'Wordpress', icon: 'devicon-wordpress-plain colored' },
];
}
