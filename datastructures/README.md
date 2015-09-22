# datastructures

All objects used in zland that represent data are described in these structure files.  

## Usage

```javascript
var _ = require('underscore');
var Immutable = require('immutable');
var ZombieStructure = require('core/datastructures/ZombieStructure');

var zombie = Immutable.fromJS(
  _.extend(ZombieStructure(), {
    id: zombieId,
    pathToPlayer: positions,
    left: positions[0].x,
    top: positions[0].y
  })
);
```

In this example the zombie structure gets wrapped into an immutable object.



<!-- start generated readme -->

## Files  

### [BulletStructure.js](BulletStructure.js.md)  
Basic bullet object model

### [CorePointStructure.js](CorePointStructure.js.md)  
Model for points

### [KnifeBulletStructure.js](KnifeBulletStructure.js.md)  
Model "Knife-Bullets". Extends BulletStructure.

### [KnifeStructure.js](KnifeStructure.js.md)  
Model for Knifes. Extends WeaponStructure.

### [PlayerStructure.js](PlayerStructure.js.md)  
Model for Players.

### [SpotStructure.js](SpotStructure.js.md)  
Model for Spots

### [StatsStructure.js](StatsStructure.js.md)  
Model for Stats

### [WeaponStructure.js](WeaponStructure.js.md)  
Model for Weapons

### [ZombieStructure.js](ZombieStructure.js.md)  
Model for Zombies. Extends SpotStructure.

<!-- end generated readme -->