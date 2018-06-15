import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ModalBodyDirective } from '../modal-body.directive';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBody } from '../../shared/model/modal-body';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.css']
})
export class ModalBaseComponent implements OnInit {

  @Input() input: any;
  @Input() component: { new(): ModalBody } ;
  @ViewChild(ModalBodyDirective) modalBodyDirective: ModalBodyDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    const viewContainerRef = this.modalBodyDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ModalBody> componentRef.instance).input = this.input;
  }
}
