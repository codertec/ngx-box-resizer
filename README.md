# BoxResizer

This library is used to resize a element by dragging.


## Instalattion

to install this package use below command. 
```
$ npm install ngx-box-resizer --save
```

## Usesage

##### .module.ts

```ts
import { ResizerDirective } from 'box-resizer';
```

```ts
  declarations: [
    ...
    ResizerDirective,
  ]
```

##### .component.ts

```ts
boxReSizeInput = { 
    yResizer: true;
    yMinHeight: 500,
    yDragIndicator: `<i class='fa fa-ellipsis-h'>`
}
```

##### .html

```html
`<div boxResizer [boxReSizeInput]="boxReSizeInput">my div with some width and height</div>`
```


## All Inputs

```ts
export interface boxReSizeInput {
    xResizer?: boolean; // deafault true
    xMinWidth?: number;  // default 30
    xMaxWidth?: number; // default 400
    xDragIndicator?: any; // can add html content as string to change the drag indicator UI.

    yResizer?: boolean; // deafault false
    yMinHeight?: number; // default 200
    yMaxHeight?: number; // default 600
    yDragIndicator?: any; // can add html content as string to change the drag indicator UI.
}
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
