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
 * @filedescription The garbage collector considers if a DOM Element is garbage
 * and can be deleted
 */

'use strict';

var math = require('core/math');

var ADDITIONAL_DISTANCE_TOLERANCE = 400;

/**
 * class
 * @param {Number} mapHeight
 */
function GarbageCollector(mapHeight) {
  this.distanceLimit = mapHeight / 2 + ADDITIONAL_DISTANCE_TOLERANCE;
}

GarbageCollector.prototype = {
  /**
   * determines if an element is garbage
   *
   * @param  {Object} $player  jquery Object
   * @param  {Object} $element jquery Object
   * @return {Boolean}
   */
  isElementGarbage: function($player, $element) {
    var rect1 = $player.get(0).getBoundingClientRect();
    var rect2 = $element.get(0).getBoundingClientRect();
    var p1, p2;
    p1 = {
      x: rect1.left,
      y: rect1.top
    };
    p2 = {
      x: rect2.left,
      y: rect2.top
    };
    return math.distance(p1, p2).distance > this.distanceLimit;
  }
};

module.exports = GarbageCollector;
