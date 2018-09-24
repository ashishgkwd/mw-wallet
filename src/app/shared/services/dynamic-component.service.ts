import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  private childComponentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationReference: ApplicationRef,
    private injector: Injector,
  ) { }

  public createComponent(parentId: string, child: any, childConfig?: any) {
    const childComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(child)
      .create(this.injector);

    this.attachConfig(childConfig, childComponentRef);
    this.childComponentRef = childComponentRef;
    this.applicationReference.attachView(childComponentRef.hostView);

    const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    console.log('ParentID ', parentId);
    const modalParent = document.getElementById(parentId);
    console.log('Parent ', modalParent);
    modalParent.appendChild(childDomElem);
  }

  public destroyComponent() {
    this.applicationReference.detachView(this.childComponentRef.hostView);
    this.childComponentRef.destroy();
  }

  attachConfig(config, componentRef) {
    const inputs = config.inputs;
    const outputs = config.outputs;
    componentRef.instance['inputs'] = inputs;
    componentRef.instance['outputs'] = outputs;
    console.log('Instance: ', componentRef.instance);
  }
}
