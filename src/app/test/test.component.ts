import { Component, OnInit, Input } from '@angular/core';
import { ModalBody } from '../shared/model/modal-body';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, ModalBody {
  @Input() input: any;

  constructor() { }

  ngOnInit() {
  }

}
