import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalBaseComponent } from './modal-base/modal-base.component';
import { ModalBody } from '../shared/model/modal-body';

@Injectable()
export class ModalService {

  constructor(private modalService: NgbModal) { }

  open<T extends ModalBody>(component: { new(): T }, input?: any, options?: NgbModalOptions) {
    const modalRef = this.modalService.open(ModalBaseComponent, options);
    (<ModalBaseComponent>modalRef.componentInstance).input = input;
    (<ModalBaseComponent>modalRef.componentInstance).component = component;
  }
}
