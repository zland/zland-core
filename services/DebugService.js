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

'use strict';

var SPEED = 2.2343434;
var _heading = 0;

function DebugService(navigator) {
  this.compassCallback = null;
  this.gpsCallback = null;
  this.isPositionActive = false;
  this.isHeadingActive = false;
}

DebugService.prototype = {
  clearWatchHeading: function() {
    this.isHeadingActive = false;
  },

  clearWatchPosition: function() {
    this.isPositionActive = false;
  },

  clearWatchAcceleration: function() {

  },

  initCompass: function(callback) {
    _heading = 0;
    this.isHeadingActive = true;
    this.compassCallback = callback;
  },

  initGps: function(callback) {
    this.isPositionActive = true;
    this.gpsCallback = callback;
  },

  sendNextPosition: function(mapStore) {
    if (!this.isPositionActive) {
      return;
    }
    if (!mapStore.getProjection()) {
      return console.error('projection missing');
    }

    var heading = mapStore.getMagneticHeading();
    var point = mapStore.getProjection().fromLatLngToPoint(mapStore.getMap().getCenter());
    var angle = -90 + heading;
    var radians = angle * (Math.PI / 180);
    var speed = 0.00005;
    var xunits = Math.cos(radians) * speed;
    var yunits = Math.sin(radians) * speed;
    point.x += xunits;
    point.y += yunits;
    var latLng = mapStore.getProjection().fromPointToLatLng(point);
    this.gpsCallback({
      coords: {
        latitude: latLng.lat(),
        longitude: latLng.lng(),
        accuracy: 5,
        heading: heading,
        speed: SPEED
      }
    });
  },

  sendHeading: function(direction, mapStore) {
    if (!this.isHeadingActive) {
      return;
    }
    switch (direction) {
      case "left":
        _heading-= 5;
        break;
      case "right":
        _heading+= 5;
        break;
    }

    this.compassCallback({magneticHeading: _heading});
  }
};

module.exports = DebugService;
