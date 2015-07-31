var expect = require('chai').expect
  , filter = require('./')

describe('filter', function() {

  it('should filter array', function() {
    expect(filter(Boolean)([0,1,0,2])).to.be.eql([1,2])
  })

})