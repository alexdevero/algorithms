export function binarySearch(list: any[], element: any): number {
  let start = 0
  let end = list.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (list[mid] === element) {
      return mid
    } else if (element > list[mid]) {
      start = mid + 1
    } else if (element < list[mid]) {
      end = mid - 1
    } else {
      return -1
    }
  }

  return -1
}
