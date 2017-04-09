var RNSimInfo = require('react-native').NativeModules.RNSimInfo;

module.exports = {
  getSimInfo: function() {
    return RNSimInfo;
  },
  getPhoneNumber: function() {
    return RNSimInfo.phoneNumber;
  },
  getCarrierName: function() {
    return RNSimInfo.carrierName;
  },
  getCountryCode: function() {
    return RNSimInfo.countryCode;
  },
};
