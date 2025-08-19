import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-aside-icons',
  imports: [MatSlideToggleModule, MatIconModule],
  templateUrl: './aside-icons.html',
  styleUrl: './aside-icons.scss'
})
export class AsideIcons {
  icons = ['home', 'folder', 'schedule', 'import_contacts', 'settings'];
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }
  activeIndex: number | null = null;
  detailsBar: boolean = false;
  setActive(index: number) {
    this.activeIndex = index; // highlight the clicked icon
    this.detailsBar = true; // show Details Bar for the clicked icon
  }

}
