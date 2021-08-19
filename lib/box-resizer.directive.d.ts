import { ElementRef, Renderer2 } from "@angular/core";
export interface boxReSizeInput {
    xResizer?: boolean;
    xMinWidth?: number;
    xMaxWidth?: number;
    xDragIndicator?: any;
    yResizer?: boolean;
    yMinHeight?: number;
    yMaxHeight?: number;
    yDragIndicator?: any;
}
export declare class ResizerDirective {
    private renderer;
    private elementRef;
    boxReSizeInput: boxReSizeInput | undefined;
    reSizeInput: boxReSizeInput;
    listenerMouseMove: (() => void) | undefined;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    private captureInputs;
    ngOnInit(): void;
    onResizeX(): void;
    onResizeY(): void;
    noSelectCssToogle(value: boolean): void;
}
