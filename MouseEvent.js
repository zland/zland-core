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
 * @filedescription determines the name of the event using device.platform from cordova
 */

'use strict';

var MouseEvent;
function MouseEvent() {
  this.mousedown = this.isMobile() ? 'touchstart' : 'mousedown';
  this.mousemove = this.isMobile() ? 'touchmove' : 'mousemove';
  this.mouseup = this.isMobile() ? 'touchend' : 'mouseup';
}

MouseEvent.prototype.isMobile = function() {
  return window.device && device.platform in {
    Android: true,
    iOS: true
  };
};

MouseEvent.prototype.getPageXY = function(event) {
  var changedTouches, touch;
  if (event.pageX && event.pageY) {
    return {
      x: event.pageX,
      y: event.pageY
    };
  }
  changedTouches = event.changedTouches;
  touch = event.originalEvent.touches[0];
  return {
    x: touch.screenX,
    y: touch.screenY
  };
};

module.exports = MouseEvent;
