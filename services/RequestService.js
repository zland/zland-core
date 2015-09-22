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

var $ = require('jquery');
var Promise = require('bluebird');
var Config = require('core/Config');

var _subscribers = {};

function request(url, data) {
  return Promise.resolve($.ajax({
    contentType: 'application/json',
    method: 'POST',
    url: url,
    dataType: 'json',
    data: JSON.stringify(data)
  }));
}

function fireEvent(event) {
  if (!_subscribers[event]) {
    return;
  }

  var args = [];
  for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
  }

  _subscribers[event].forEach(function(subscriber) {
    subscriber.apply(undefined, args);
  });
}

module.exports = {
  subscribe: function(event, subscriber) {
    if (!_subscribers[event]) {
      _subscribers[event] = [];
    }
    _subscribers[event].push(subscriber);
  },

  post: function(path, data) {
    fireEvent("pre", path, data);
    return request(Config.get('api_url') + path, data)
      .then(function(response) {
        fireEvent('post', response);
        return response;
      });
  },

  unsubscribe: function(event, subscriber) {
    if (!_subscribers[event]) {
      return;
    }
    _subscribers[event].forEach(function(existingSubscriber, i) {
      if (existingSubscriber === subscriber) {
        _subscribers.splice(i, 1);
      }
    });
  }
};
