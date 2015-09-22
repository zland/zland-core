/*!
 * Copyright 2015 Florian Biewald
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @filedescription math functions used within the whole project are wrapped into this object
 */

 'use strict';

module.exports = {
  /**
   * calculate distance between two points {x, y}
   * @param  {Object} p1
   * @param  {Object} p2
   * @param  {Number} speed Optional
   * @return {Object}
   *
   * ```javascript
   * {
   *     x: <x units>,
   *     y: <y units>,
   *     moves: <moves to reach destination>,
   *     distance: <distance>
   * }
   * ```
   */
  distance: function(p1, p2, speed) {
    var distance, dx, dy, moves;
    if (speed == null) {
      speed = 1;
    }
    dx = p2.x - p1.x;
    dy = p2.y - p1.y;
    distance = Math.sqrt(dx * dx + dy * dy);
    moves = distance / speed;
    return {
      x: p2.x - p1.x,
      y: p2.y - p1.y,
      moves: moves,
      distance: distance
    };
  },

  /**
   * @see [http://stackoverflow.com/questions/1502590/calculate-distance-between-two-points-in-google-maps-v3](stackoverflow)
   * @param  {Object} p1
   * @param  {Object} p2
   * @return {Number}  meters
   */
  metersBetweenTwoPoints: function(p1, p2) {
    var R, a, c, d, dLat, dLong, rad;
    rad = function(x) {
      return x * Math.PI / 180;
    };
    R = 6378137;
    dLat = rad(p2.lat() - p1.lat());
    dLong = rad(p2.lng() - p1.lng());
    a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    d = R * c;
    return d;
  },

  /**
   * calculate angle between two points
   * @param  {Object} p1
   * @param  {Object} p2
   * @param  {Number} globalRotation Optional
   * @return {Number}                angle
   */
  calculateAngle: function(p1, p2, globalRotation) {
    var rotationDivergence, theta;
    theta = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    if (globalRotation !== undefined) {
      rotationDivergence = (Math.PI / 180) * globalRotation;
      theta += rotationDivergence;
    }
    if (theta < 0) {
      theta += 2 * Math.PI;
    }
    return theta;
  },
  /**
   * calculates a vector with given angle
   * @param  {Number} angle
   * @param  {Number} speed Optional
   * @return {Object}       {x, y}
   */
  vectorUnits: function(angle, speed) {
    var theta;
    if (speed == null) {
      speed = 1;
    }
    theta = angle * Math.PI / 180;
    if (theta < 0) {
      theta += 2 * Math.PI;
    }
    return this.units(theta, speed);
  },

  /**
   * calculates the units with given angle
   * @param  {Number} theta
   * @param  {Number} speed Optional
   * @return {Object} {x,y}
   */
  units: function(theta, speed) {
    if (speed == null) {
      speed = 1;
    }
    return {
      x: Math.cos(theta) * speed,
      y: Math.sin(theta) * speed
    };
  },

  /**
   *
   * @param  {Number} value
   * @param  {Number} positions
   * @return {Number}
   */
  toFixed: function(value, positions) {
    if (positions == null) {
      positions = 6;
    }
    return parseFloat(value.toFixed(positions));
  }
};
