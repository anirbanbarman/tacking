import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
