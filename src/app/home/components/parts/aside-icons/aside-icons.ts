import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-icons',
  imports: [],
  templateUrl: './aside-icons.html',
  styleUrl: './aside-icons.scss'
})
export class AsideIcons {
  icons = ['icon pi pi-home', 'icon pi pi-folder', 'icon pi pi-clock', 'icon pi pi-cog'];
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
