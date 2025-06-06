import { Component } from '@angular/core';
import { CallbackComponent } from "../callback/callback.component";

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CallbackComponent],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

}
