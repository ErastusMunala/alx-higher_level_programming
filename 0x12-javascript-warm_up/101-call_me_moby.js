#!/usr/bin/node

exports.callMeMoby = function (x, functionX) {
  for (let i = 0; i < x; i++) {
    functionX();
  }
};
