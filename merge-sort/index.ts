export function mergeSort(arr: any[]): any[] {
  if (arr.length <= 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  while (left.length) {
    arr.push(left.shift())
  }

  while (right.length) {
    arr.push(right.shift())
  }

  return arr
}
