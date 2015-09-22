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
  * @filedescription Model for Zombies. Extends SpotStructure.
  */

 /**
  * a zombie is a spot that will be revealed if the player is near the spot
  */

'use strict';
var _ = require('underscore');
var SpotStructure = require('./SpotStructure');


module.exports = function() {
  return _.extend(SpotStructure(), {


    /**
     * world points indicating the route to the player
     * the point that is farest away is the zombie point (spot point)
     * and the other points are for orientation
     * @type {Array}
     */
    pathToPlayer: [],
    /**
     * left position of zombie
     * @type {Number}
     */
    left: 0,
    /**
     * right pos of player
     * @type {Number}
     */
    top: 0,
    /**
     * name of spot is zombie
     * @type {String}
     */
    name: 'zombie',
    /**
     * determines whether the zombie is moving or not
     * @type {Boolean}
     */
    isMoving: false,
    /**
     * a flag if all points are injected
     * @type {Boolean}
     */
    hasAllPoints: false,
    /**
     * current rotation of zombie
     * @type {Number}
     */
    rotation: 0,
    /**
     * move value X, if a zombie is moving to a point
     * this is the value that is added to the current zombies x value
     * @type {Number}
     */
    moveX: 0,
    /**
     * move value Y, if a zombie is moving to a point
     * this is the value that is added to the current zombies y value
     * @type {Number}
     */
    moveY: 0,
    /**
     * the index of the current point to which zombie is currently moving to
     * @type {Number}
     */
    movePointIndex: null,
    /**
     * if set to true zombie takes a break time of milliseconds defined in
     * breakTimeout
     * @type {Boolean}
     */
    takeBreak: false,
    /**
     * time zombie is taking a break
     * @type {Number}
     */
    breakTimeout: null,
    /**
     * if this is set to true the zombie has detected the player and will
     * move to his location
     * @type {Boolean}
     */
    isHunting: false,
    /**
     * how many bullet hits a zombie took
     * @type {Number}
     */
    hitCount: 0,
    /**
     * the points that are placed in playground
     * @type {Number}
     */
    placedPointCount: 0,
    /**
     * whether zombie is dead or not
     * @type {Boolean}
     */
    dead: false,
    /**
     * body parts of zombie
     * resistance: a bullet that hits the left arm will be discharged by the resistance
     * dead: a body part can be dead or not functioning anymore if the resistance is down
     * isCritical: when this bodypart is critical the first hit results in the immediate
     *             death of the zombie
     * @type {Object}
     */
    bodyParts: {
      armLeft: {
        id: 'armLeft',
        resistance: 30,
        isCritical: false,
        dead: false
      },
      armRight: {
        id: 'armRight',
        resistance: 30,
        isCritical: false,
        dead: false
      },
      torso: {
        id: 'torso',
        resistance: 70,
        isCritical: false,
        dead: false
      },
      head: {
        id: 'head',
        resistance: 25,
        isCritical: true,
        dead: false
      }
    }
  });
};
