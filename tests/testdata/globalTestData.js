var globalTestData = function () {

  this.testData = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  this.setField = function (field, value) {
    this.testData[field] = value;
  };

  this.getField = function (field) {
    return this.testData[field];
  };

};

module.exports = new globalTestData();
