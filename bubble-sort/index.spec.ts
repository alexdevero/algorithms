import { bubbleSort } from './index'

describe('bubbleSort', () => {
  it('should sort an array of numbers', () => {
    const arr = [5, 4, 3, 2, 1]

    expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5])
  })

  it('should sort an array of strings', () => {
    const arr = ['e', 'd', 'c', 'b', 'a']

    expect(bubbleSort(arr)).toEqual(['a', 'b', 'c', 'd', 'e'])
  })
})
