# filetemplates

Files in this folder are used in the zland build process to dynamically create objects, append children or construct routes.  
To gain more information about the build process check zland main project.




<!-- start generated readme -->

## Files  

### [Array.js](Array.js.md)  
Array file template

### [CanvasView.jsx](CanvasView.jsx.md)  
CanvasView file template. Appends child elements dynamically in build process.

### [Empty.js](Empty.js.md)  
Empty file template

### [Function.js](Function.js.md)  
Function file template

### [Object.js](Object.js.md)  
Object file template

### [Routes.jsx](Routes.jsx.md)  
Routes constructed here use .zland config add this to your .zland json config to create a route for your project

Example:
```json
 "routes": [
    {
      "path": "intro",
      "handler": "components/IntroductionWindow"
    }
 ]
```

<!-- end generated readme -->