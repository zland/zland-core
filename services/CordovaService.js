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

function CordovaService(navigator) {
  this.watchHeadingId = null;
  this.watchPositionId = null;
  this.watchAccelerationId = null;
  this.compass = navigator.compass;
  this.geolocation = navigator.geolocation;
  this.accelerometer = navigator.accelerometer;
  // Events.subscribe('env.suspendHeading', this.clearWatchHeading, this);
  // Events.subscribe('env.resumeHeading', this.initCompass, this);
}

CordovaService.prototype = {
  clearWatchHeading: function() {
    if (this.watchHeadingId) {
      this.compass.clearWatch(this.watchHeadingId);
    }
    return this;
  },

  clearWatchPosition: function() {
    if (this.watchPositionId) {
      this.geolocation.clearWatch(this.watchPositionId);
    }
    return this;
  },

  clearWatchAcceleration: function() {
    if (this.watchPositionId) {
      this.geolocation.clearWatch(this.watchPositionId);
    }
    return this;
  },

  initCompass: function(callback) {
    var onDeviceReady, onError, onSuccess;
    onError = function(compassError) {
      return console.log('Compass error: ' + compassError.code);
    };
    onDeviceReady = (function() {
      var options;
      options = {
        frequency: 20
      };
      this.watchHeadingId = this.compass.watchHeading(onSuccess, onError, options);
    }).bind(this);
    onSuccess = function(heading) {
      callback.call(undefined, heading);
    };
    document.addEventListener("deviceready", onDeviceReady, false);
    return this;
  },

  initGps: function(callback) {
    var onDeviceReady, onError, onSuccess;
    onError = function(error) {
      return console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    };
    onDeviceReady = (function() {
      var options;
      options = {
        maximumAge: 3000,
        timeout: 5000,
        enableHighAccuracy: true
      };
      this.watchPositionId = this.geolocation.watchPosition(onSuccess, onError, options);
    }).bind(this);

    onSuccess = function(position) {
      callback.call(undefined, position);
    };
    document.addEventListener("deviceready", onDeviceReady, false);
    return this;
  }
};


module.exports = CordovaService
