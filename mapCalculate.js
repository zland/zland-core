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
 * @filedescription calculates map height, width and offset
 */

'use strict';

var $ = require('jquery');

function MapCalculate() {
  var halfHeight, offsetTopToPlayer, windowHeight, windowWidth;
  this.height = windowHeight = $(window).height();
  this.width = windowWidth = $(window).width();
  halfHeight = windowHeight / 2;
  this.playerOffset = halfHeight - 200;
  offsetTopToPlayer = this.playerOffset + halfHeight;
  this.neededRotationSize = Math.ceil(Math.sqrt(Math.pow(this.width / 2, 2) + Math.pow(offsetTopToPlayer, 2))) * 2;
  this.width = this.height = this.neededRotationSize;
  this.top = ((this.neededRotationSize - windowHeight) / 2) * -1 + this.playerOffset;
  this.left = ((this.neededRotationSize - windowWidth) / 2) * -1;
}

MapCalculate.prototype.getHeight = function() {
  return this.height;
};

MapCalculate.prototype.getWidth = function() {
  return this.width;
};

MapCalculate.prototype.getTop = function() {
  return this.top;
};

MapCalculate.prototype.getLeft = function() {
  return this.left;
};

MapCalculate.prototype.getPlayerOffset = function() {
  return this.playerOffset;
};



module.exports = new MapCalculate();
