import { AfterViewInit, Component } from '@angular/core';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HomelabsComponent } from '../homelabs/homelabs.component';
import * as AOS from 'aos';
import Typed from 'typed.js';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MaincontentComponent, HomelabsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initialize AOS
    AOS.init();

    // Initialize Typed.js
    const typed = new Typed('.typed-text', {
      strings: [
        'Innovators.',
        'Tech Enthusiasts.',
        'AI Experts.',
        'Your Future Partners.',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
  }
}
