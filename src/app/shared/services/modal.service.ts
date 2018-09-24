import { Injectable } from '@angular/core';
import { DynamicComponentService } from './dynamic-component.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalParentId = 'modal-parent';
  private overlayId = 'overlay';

  constructor(private dmcService: DynamicComponentService) {}

  public open(component: any, inputs?: any, outputs?: any) {
    const componentConfig = { inputs, outputs };
    this.dmcService.createComponent(this.modalParentId, component, componentConfig);
    document.getElementById(this.modalParentId).className = 'show';
    document.getElementById(this.overlayId).className = 'show';
  }

  public destroy() {
    this.dmcService.destroyComponent();
    document.getElementById(this.modalParentId).className = 'hidden';
    document.getElementById(this.overlayId).className = 'hidden';
  }
}
