import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {hideOthers, Undo} from 'aria-hidden';

@Component({
  selector: 'twitch-client-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {

  @ViewChild('modal')
  modalTemplate?: TemplateRef<null>;

  @ViewChild('modalEl')
  modalElement?: ElementRef<HTMLDivElement>;

  overlayRef?: OverlayRef;
  previousEl?: Element | null;
  undo: Undo = () => null;

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
    this.undo();
    this.overlayRef?.dispose();
  }

  open() {
    if (this.modalTemplate) {
      const modalContent = new TemplatePortal(this.modalTemplate, this._viewContainerRef);
      this.overlayRef?.attach(modalContent);

      setTimeout(() => {

        if (!this.modalElement?.nativeElement) {
          return;
        }

        this.previousEl = document.activeElement;
        const $el = this.modalElement.nativeElement;
        $el.focus();
        this.undo = hideOthers($el);
      }, 100);
    }
  }

  close() {
    this.undo();
    (this.previousEl as HTMLElement)?.focus();
    this.overlayRef?.detach();
  }


}
