import * as i0 from '@angular/core';
import { Injectable, Directive, Renderer2, ElementRef, Input, NgModule } from '@angular/core';

class BoxResizerService {
    constructor() { }
}
BoxResizerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BoxResizerService_Factory() { return new BoxResizerService(); }, token: BoxResizerService, providedIn: "root" });
BoxResizerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
BoxResizerService.ctorParameters = () => [];

class ResizerDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.reSizeInput = {};
    }
    captureInputs() {
        this.reSizeInput.xResizer =
            this.boxReSizeInput && this.boxReSizeInput.yResizer
                ? this.boxReSizeInput.yResizer
                : true;
        this.reSizeInput.xMinWidth =
            this.boxReSizeInput && this.boxReSizeInput.xMinWidth
                ? this.boxReSizeInput.xMinWidth
                : 30;
        this.reSizeInput.xMaxWidth =
            this.boxReSizeInput && this.boxReSizeInput.xMaxWidth
                ? this.boxReSizeInput.xMaxWidth
                : 400;
        this.reSizeInput.xDragIndicator = this.boxReSizeInput && this.boxReSizeInput.xDragIndicator
            ? this.boxReSizeInput.xDragIndicator
            : `<div style="position: absolute;
    height: 100%;
    width: 10px;
    background: #e7e7e7;
    cursor: e-resize;
    top: 0px;
    right: 0px;"></div>`;
        this.reSizeInput.yResizer =
            this.boxReSizeInput && this.boxReSizeInput.yResizer
                ? this.boxReSizeInput.yResizer
                : false;
        this.reSizeInput.yMinHeight =
            this.boxReSizeInput && this.boxReSizeInput.yMinHeight
                ? this.boxReSizeInput.yMinHeight
                : 200;
        this.reSizeInput.yMaxHeight =
            this.boxReSizeInput && this.boxReSizeInput.yMaxHeight
                ? this.boxReSizeInput.yMaxHeight
                : 800;
        this.reSizeInput.yDragIndicator = this.boxReSizeInput && this.boxReSizeInput.yDragIndicator
            ? this.boxReSizeInput.yDragIndicator
            : `<div style="position: absolute;
        height: 10px;
        width: 100%;
        background: #e7e7e7;
        cursor: n-resize;
        bottom: 0px;
        left: 0px;"></div>`;
    }
    ngOnInit() {
        this.captureInputs();
        if (this.reSizeInput && this.reSizeInput.xResizer) {
            this.onResizeX();
        }
        if (this.reSizeInput && this.reSizeInput.yResizer) {
            this.onResizeY();
        }
    }
    onResizeX() {
        const childX = window.document.createElement("box-resizer-drag-x");
        childX.innerHTML = this.reSizeInput.xDragIndicator;
        this.renderer.setStyle(this.elementRef.nativeElement, "position", "relative");
        this.renderer.setStyle(this.elementRef.nativeElement, "flex", `initial`);
        this.renderer.appendChild(this.elementRef.nativeElement, childX);
        this.renderer.listen(window.document, "mouseup", (event) => {
            if (this.listenerMouseMove) {
                this.listenerMouseMove();
                this.noSelectCssToogle(false);
            }
        });
        this.renderer.listen(childX, "mousedown", (event) => {
            this.noSelectCssToogle(true);
            // this.onResizeX();
            this.listenerMouseMove = this.renderer.listen(window.document, "mousemove", (event) => {
                let width = event.clientX -
                    this.elementRef.nativeElement.getBoundingClientRect().left;
                if ((this.reSizeInput && this.reSizeInput.xMinWidth) && (width < this.reSizeInput.xMinWidth)) {
                    width = this.reSizeInput.xMinWidth;
                }
                if ((this.reSizeInput && this.reSizeInput.xMaxWidth) && (width > this.reSizeInput.xMaxWidth)) {
                    width = this.reSizeInput.xMaxWidth;
                }
                this.elementRef.nativeElement.style.width = width + "px";
            });
        });
    }
    onResizeY() {
        const childX = window.document.createElement("box-resizer-drag-y");
        childX.innerHTML = this.reSizeInput && this.reSizeInput.yDragIndicator;
        this.renderer.setStyle(this.elementRef.nativeElement, "position", "relative");
        this.renderer.setStyle(this.elementRef.nativeElement, "flex", `initial`);
        this.renderer.appendChild(this.elementRef.nativeElement, childX);
        this.renderer.listen(window.document, "mouseup", (event) => {
            if (this.listenerMouseMove) {
                this.listenerMouseMove();
                this.noSelectCssToogle(false);
            }
        });
        this.renderer.listen(childX, "mousedown", (event) => {
            this.noSelectCssToogle(true);
            // this.onResizeX();
            this.listenerMouseMove = this.renderer.listen(window.document, "mousemove", (event) => {
                let height = event.clientY -
                    this.elementRef.nativeElement.getBoundingClientRect().top;
                if ((this.reSizeInput && this.reSizeInput.yMinHeight) && (height < this.reSizeInput.yMinHeight)) {
                    height = this.reSizeInput.yMinHeight;
                }
                if ((this.reSizeInput && this.reSizeInput.yMaxHeight) && (height > this.reSizeInput.yMaxHeight)) {
                    height = this.reSizeInput.yMaxHeight;
                }
                this.elementRef.nativeElement.style.height = height + "px";
            });
        });
    }
    noSelectCssToogle(value) {
        const sheet = window.document.styleSheets[0];
        if (value) {
            sheet.insertRule(`body { -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
            -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;; }`, 0);
        }
        else {
            sheet.removeRule(0);
        }
    }
}
ResizerDirective.decorators = [
    { type: Directive, args: [{
                selector: "[boxResizer]",
            },] }
];
ResizerDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
ResizerDirective.propDecorators = {
    boxReSizeInput: [{ type: Input }]
};

class BoxResizerModule {
}
BoxResizerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ResizerDirective],
                imports: [],
                exports: [ResizerDirective]
            },] }
];

/*
 * Public API Surface of box-resizer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BoxResizerModule, BoxResizerService, ResizerDirective };
//# sourceMappingURL=ngx-box-resizer.js.map
