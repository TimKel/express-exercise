
const {findMean, findMedian, findMode} = require('./helpers');

describe('findMean', function(){
    test('find the Mean of even set', function(){
        expect(findMean([1,2,3,4,5,6])).toEqual(3.5);
    })
    test('find the Mean of an odd set', function(){
        expect(findMean([1,2,3,4,5])).toEqual(3);
    })
})

describe('findMedian', function(){
    it('find the Median of even set', function(){
        expect(findMedian()[1,2,3,4,5,6]).toEqual(3.5);
    })
    it('find the Median of odd set', function(){
        expect(findMedian()[1,2,3,4,5]).toEqual(3);
    })
})

describe("findMode", function () {
    it("finds the mode", function () { 
      expect(findMode([1,1,1,2,2,3])).toEqual(1)
    })
  })