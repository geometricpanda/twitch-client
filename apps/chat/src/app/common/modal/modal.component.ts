import {Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'twitch-client-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {

  @ViewChild('modal')
  modalTemplate?: TemplateRef<null>

  overlayRef?: OverlayRef;

  constructor(
    private overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
  ) {
  }

  ngOnInit() {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    this.overlayRef = this.overlay.create({positionStrategy, hasBackdrop: true});
  }

  ngOnDestroy() {
    this.overlayRef?.dispose();
  }

  open() {
    if (this.modalTemplate) {
      const modalContent = new TemplatePortal(this.modalTemplate, this._viewContainerRef);
      this.overlayRef?.attach(modalContent);
    }
  }

  close() {
    this.overlayRef?.detach();
  }


}
