import { mergeSort } from './index'

describe('mergeSort', () => {
  test('should sort array', () => {
    expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
    expect(mergeSort([4, 3, 2, 1, 5])).toEqual([1, 2, 3, 4, 5])
    expect(mergeSort([4, 3, 2, 1, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  })
})
