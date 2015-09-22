# zland core

zland core provides core functionality for zland.



<!-- start generated readme -->

## Directories  

### [actions](actions)  
A few actions for things used throughout other zland projects

### [components](components)  
Core components.  

### [datastructures](datastructures)  
All objects used in zland that represent data are described in these structure files.  

### [filetemplates](filetemplates)  
Files in this folder are used in the zland build process to dynamically create objects, append children or construct routes.  

### [google](google)  
Google files wrapped into own objects. Originally used for unit testing.  

### [gulp](gulp)  


### [sass](sass)  


### [services](services)  
Contains zland services shared in various sub projects.

## Files  

### [ChangeEventEmitter.js](ChangeEventEmitter.js.md)  
zland change event emitter used in flux stores (and where an event emitter is needed)

### [Config.js](Config.js.md)  
Config object to make config parameters available within the zland. 

Example:
```javascript

// get top level param
Config.get('debug');
// get nested params
Config.get('test.test');

```

### [Constants.js](Constants.js.md)  
Constants for use with stores

### [Defer.js](Defer.js.md)  
defer object for compatibility reasons. use the newer new Promise constructor of bluebird

### [Dispatcher.js](Dispatcher.js.md)  
A static instance of flux Dispatcher

### [GarbageCollector.js](GarbageCollector.js.md)  
The garbage collector considers if a DOM Element is garbage and can be deleted

### [MouseEvent.js](MouseEvent.js.md)  
determines the name of the event using device.platform from cordova

### [gulpfile.js](gulpfile.js.md)  


### [mapCalculate.js](mapCalculate.js.md)  
calculates map height, width and offset

### [math.js](math.js.md)  
math functions used within the whole project are wrapped into this object

### [modulegulpfile.js](modulegulpfile.js.md)  


### [webpack.config.js](webpack.config.js.md)  


<!-- end generated readme -->