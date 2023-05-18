import { Component, Input } from '@angular/core';
import { Imenu } from 'src/app/interfaces/imenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menu!: Imenu;
}
