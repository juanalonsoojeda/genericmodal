import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBaseComponent } from './modal-base/modal-base.component';
import { ModalBodyDirective } from './modal-body.directive';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ModalService } from './modal.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule.forRoot()
  ],
  declarations: [ModalBodyDirective, ModalBaseComponent ],
  exports: [ModalBaseComponent],
  entryComponents: [ModalBaseComponent],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ModalService]
    };
  }
}
