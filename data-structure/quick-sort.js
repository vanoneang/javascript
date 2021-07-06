export function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]

  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < pivot) {
      left.push(element)
    } else {
      right.push(element)
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
