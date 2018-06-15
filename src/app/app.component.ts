import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';
import { ModalService } from './shared/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: ModalService) {}

  open() {
    this.modalService.open( TestComponent, 'Hello World', {size: 'lg'});
  }
}
