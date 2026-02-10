import { Component } from '@angular/core';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeroComponent } from './section/hero/hero.component';
import { AboutComponent } from './section/about/about.component';
import { SkillsComponent } from './section/skills/skills.component';
import { ProjectsComponent } from './section/projects/projects.component';
import { ContactComponent } from './section/contact/contact.component';
import { FooterComponent } from './core/footer/footer.component';
import { TechStackComponent } from './section/tech-stack/tech-stack.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // ✅ important
  imports: [
    NavbarComponent,
    HeroComponent,
    TechStackComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AppComponent {
  title = 'bilal-portfolio';
}
