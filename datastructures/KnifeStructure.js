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
  * @filedescription Model for Knifes. Extends WeaponStructure.
  */

'use strict';

var _ = require('underscore');
var WeaponStructure = require('./WeaponStructure');

module.exports = function() {
  return _.extend(WeaponStructure(), {
    name: 'Knife',
    ammo: 20,
    maxAmmo: 20,
    rechargeTime: 500,
    distance: 200,
    charge: 20,
    speed: 10,
    hudImage: 'assets/zland-weapon/img/knife_hud.png'
  });
};
