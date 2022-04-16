import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  showDropdown(element: any) {
    this.renderer.addClass(element, 'show');

  }
  hide(element: any) {

    this.renderer.removeClass(element, 'show');
  }
}
