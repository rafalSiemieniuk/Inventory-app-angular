import { Component, OnInit, ViewChild } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { ContentMenuComponent } from '../content-menu/content-menu.component';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  sideMenu = SideMenuComponent;
  contentMenu = ContentMenuComponent;
  @ViewChild('splitter') splitter;
  constructor(private menuService: MenuService) {
    this.menuService.menu$.subscribe(() => this.splitter.nativeElement.side.toggle());
  }
  
  ngOnInit() {
  }

}
