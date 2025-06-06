import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menulabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menulabs.component.html',
  styleUrl: './menulabs.component.css',
})
export class MenulabsComponent {
  labs: any[] = [];
  selectedLab: any = null;
  currentItem: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const labKey = this.route.snapshot.paramMap.get('labKey');

    this.http.get<any[]>('assets/Json/labsContent.json').subscribe((data) => {
      this.labs = data;
      this.selectedLab = this.labs.find((lab) => lab.key === labKey);

      if (this.selectedLab) {
        this.currentItem = {
          title: this.selectedLab.title,
          description: this.selectedLab.description,
          software: this.selectedLab.software,
          image: this.selectedLab.images?.[0],
        };
      }
    });
  }
}
