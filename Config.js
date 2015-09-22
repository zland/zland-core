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
 * @filedescription Config object to make config parameters available within the zland.
 *
 *
 * Example:
 * ```javascript
 *
 * // get top level param
 * Config.get('debug');
 * // get nested params
 * Config.get('test.test');
 *
 * ```
 */

 'use strict';

var _config = undefined;

module.exports = {
  get: function(key) {
    var currentConfigObj, i, keyParts, subKey, throwKeyNotExists;
    if (!_config) {
      throw new Error('config not exists');
    }
    throwKeyNotExists = function(key) {
      throw new Error("config key " + key + " not exists");
    };
    if (key.indexOf('.') !== -1) {
      keyParts = key.split('.');
      currentConfigObj = _config;
      for (i in keyParts) {
        subKey = keyParts[i];
        if (currentConfigObj[subKey] == null) {
          throwKeyNotExists(subKey);
        }
        if (keyParts.length - 1 === parseInt(i)) {
          return currentConfigObj[subKey];
        }
        currentConfigObj = currentConfigObj[subKey];
      }
      throwKeyNotExists(key);
    }
    if (_config[key] == null) {
      throwKeyNotExists(key);
    }
    return _config[key];
  },
  set: function(config) {
    return _config = config;
  }
};
