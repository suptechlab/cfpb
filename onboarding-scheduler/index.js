/*
 * onboarding-scheduler
 *
 * A work of the public domain from the Consumer Financial Protection Bureau.
 */

'use strict';

var moment = require('moment');
var _ = require('lodash');

moment.fn.isWeekend = function() {
  return this.isoWeekday() >= 6
};

moment.fn.nextBusinessDay = function() {
  var tomorrow = this.add(1, 'd');
  while (tomorrow.isWeekend()) {
    tomorrow.add(1, 'd');
  }
  return tomorrow;
};

function processMessages(messages, startDate) {

  var day = moment(startDate).utcOffset("-04:00"),
    businessDays = [day.set({hour: 10, minute: 0, second: 0}).format()],
    scheduledMessages = [],
    hoursApart = 4;

  var greatestDay = _.maxBy(messages, 'day').day;
  while (greatestDay--) {
    businessDays.push(day.nextBusinessDay().format());
  }


  // Give every message a sequential date
  messages = messages.map(function (message) {
    message.time = businessDays[message.day - 1];
    return message;
  });

  // Group messages on the same day and spread out their times
  messages = _.groupBy(messages, function(message) {
    return message.day;
  });
  for (var message in messages) {
    if (messages[message].length > 1) {
      hoursApart = Math.floor(8 / messages[message].length) || 1;
      messages[message] = messages[message].map(function adjustTime(message, i) {
        var hour = 9 + (hoursApart / 2) + (hoursApart * i);
        message.time = moment(message.time).utcOffset("-04:00").hour(hour).format();
        return message;
      });
    }
  }

  // Flatten the object back into an array
  for (message in messages) {
    scheduledMessages = scheduledMessages.concat(messages[message]);
  }
  return scheduledMessages;
}

module.exports = processMessages;
