(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-box-resizer', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-box-resizer'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var BoxResizerService = /** @class */ (function () {
        function BoxResizerService() {
        }
        return BoxResizerService;
    }());
    BoxResizerService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function BoxResizerService_Factory() { return new BoxResizerService(); }, token: BoxResizerService, providedIn: "root" });
    BoxResizerService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    BoxResizerService.ctorParameters = function () { return []; };

    var ResizerDirective = /** @class */ (function () {
        function ResizerDirective(renderer, elementRef) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.reSizeInput = {};
        }
        ResizerDirective.prototype.captureInputs = function () {
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
                : "<div style=\"position: absolute;\n    height: 100%;\n    width: 10px;\n    background: #e7e7e7;\n    cursor: e-resize;\n    top: 0px;\n    right: 0px;\"></div>";
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
                : "<div style=\"position: absolute;\n        height: 10px;\n        width: 100%;\n        background: #e7e7e7;\n        cursor: n-resize;\n        bottom: 0px;\n        left: 0px;\"></div>";
        };
        ResizerDirective.prototype.ngOnInit = function () {
            this.captureInputs();
            if (this.reSizeInput && this.reSizeInput.xResizer) {
                this.onResizeX();
            }
            if (this.reSizeInput && this.reSizeInput.yResizer) {
                this.onResizeY();
            }
        };
        ResizerDirective.prototype.onResizeX = function () {
            var _this = this;
            var childX = window.document.createElement("box-resizer-drag-x");
            childX.innerHTML = this.reSizeInput.xDragIndicator;
            this.renderer.setStyle(this.elementRef.nativeElement, "position", "relative");
            this.renderer.setStyle(this.elementRef.nativeElement, "flex", "initial");
            this.renderer.appendChild(this.elementRef.nativeElement, childX);
            this.renderer.listen(window.document, "mouseup", function (event) {
                if (_this.listenerMouseMove) {
                    _this.listenerMouseMove();
                    _this.noSelectCssToogle(false);
                }
            });
            this.renderer.listen(childX, "mousedown", function (event) {
                _this.noSelectCssToogle(true);
                // this.onResizeX();
                _this.listenerMouseMove = _this.renderer.listen(window.document, "mousemove", function (event) {
                    var width = event.clientX -
                        _this.elementRef.nativeElement.getBoundingClientRect().left;
                    if ((_this.reSizeInput && _this.reSizeInput.xMinWidth) && (width < _this.reSizeInput.xMinWidth)) {
                        width = _this.reSizeInput.xMinWidth;
                    }
                    if ((_this.reSizeInput && _this.reSizeInput.xMaxWidth) && (width > _this.reSizeInput.xMaxWidth)) {
                        width = _this.reSizeInput.xMaxWidth;
                    }
                    _this.elementRef.nativeElement.style.width = width + "px";
                });
            });
        };
        ResizerDirective.prototype.onResizeY = function () {
            var _this = this;
            var childX = window.document.createElement("box-resizer-drag-y");
            childX.innerHTML = this.reSizeInput && this.reSizeInput.yDragIndicator;
            this.renderer.setStyle(this.elementRef.nativeElement, "position", "relative");
            this.renderer.setStyle(this.elementRef.nativeElement, "flex", "initial");
            this.renderer.appendChild(this.elementRef.nativeElement, childX);
            this.renderer.listen(window.document, "mouseup", function (event) {
                if (_this.listenerMouseMove) {
                    _this.listenerMouseMove();
                    _this.noSelectCssToogle(false);
                }
            });
            this.renderer.listen(childX, "mousedown", function (event) {
                _this.noSelectCssToogle(true);
                // this.onResizeX();
                _this.listenerMouseMove = _this.renderer.listen(window.document, "mousemove", function (event) {
                    var height = event.clientY -
                        _this.elementRef.nativeElement.getBoundingClientRect().top;
                    if ((_this.reSizeInput && _this.reSizeInput.yMinHeight) && (height < _this.reSizeInput.yMinHeight)) {
                        height = _this.reSizeInput.yMinHeight;
                    }
                    if ((_this.reSizeInput && _this.reSizeInput.yMaxHeight) && (height > _this.reSizeInput.yMaxHeight)) {
                        height = _this.reSizeInput.yMaxHeight;
                    }
                    _this.elementRef.nativeElement.style.height = height + "px";
                });
            });
        };
        ResizerDirective.prototype.noSelectCssToogle = function (value) {
            var sheet = window.document.styleSheets[0];
            if (value) {
                sheet.insertRule("body { -webkit-touch-callout: none;\n          -webkit-user-select: none;\n          -khtml-user-select: none;\n            -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none;; }", 0);
            }
            else {
                sheet.removeRule(0);
            }
        };
        return ResizerDirective;
    }());
    ResizerDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: "[boxResizer]",
                },] }
    ];
    ResizerDirective.ctorParameters = function () { return [
        { type: i0.Renderer2 },
        { type: i0.ElementRef }
    ]; };
    ResizerDirective.propDecorators = {
        boxReSizeInput: [{ type: i0.Input }]
    };

    var BoxResizerModule = /** @class */ (function () {
        function BoxResizerModule() {
        }
        return BoxResizerModule;
    }());
    BoxResizerModule.decorators = [
        { type: i0.NgModule, args: [{
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

    exports.BoxResizerModule = BoxResizerModule;
    exports.BoxResizerService = BoxResizerService;
    exports.ResizerDirective = ResizerDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-box-resizer.umd.js.map
