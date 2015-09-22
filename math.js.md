

<!-- Start math.js -->

# [math.js](math.js)

math functions used within the whole project are wrapped into this object

## distance(p1, p2, speed)

calculate distance between two points {x, y}

### Params:

* **Object** *p1* 
* **Object** *p2* 
* **Number** *speed* Optional

### Return:

* **Object** 
```javascript
{
    x: <x units>,
    y: <y units>,
    moves: <moves to reach destination>,
    distance: <distance>
}
```

## metersBetweenTwoPoints(p1, p2)

See: [http://stackoverflow.com/questions/1502590/calculate-distance-between-two-points-in-google-maps-v3](stackoverflow)

### Params:

* **Object** *p1* 
* **Object** *p2* 

### Return:

* **Number** meters

## calculateAngle(p1, p2, globalRotation)

calculate angle between two points

### Params:

* **Object** *p1* 
* **Object** *p2* 
* **Number** *globalRotation* Optional

### Return:

* **Number** angle

## vectorUnits(angle, speed)

calculates a vector with given angle

### Params:

* **Number** *angle* 
* **Number** *speed* Optional

### Return:

* **Object** {x, y}

## units(theta, speed)

calculates the units with given angle

### Params:

* **Number** *theta* 
* **Number** *speed* Optional

### Return:

* **Object** {x,y}

## toFixed(value, positions)

### Params:

* **Number** *value* 
* **Number** *positions* 

### Return:

* **Number** 

<!-- End math.js -->

