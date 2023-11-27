import { binarySearch } from './index'

describe('binarySearch', () => {
  test('should find index of element in array', () => {
    expect(binarySearch([1, 2, 3, 4], 1)).toEqual(0)
    expect(binarySearch([1, 2, 3, 4], 2)).toEqual(1)
    expect(binarySearch([1, 2, 3, 4], 3)).toEqual(2)
    expect(binarySearch([1, 2, 3, 4], 4)).toEqual(3)
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toEqual(0)
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1)
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2)
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3)
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4)
  })

  test('should return -1 if element is not in array', () => {
    expect(binarySearch([1, 2, 3, 4], 5)).toEqual(-1)
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1)
  })
})
