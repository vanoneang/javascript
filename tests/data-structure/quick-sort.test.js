import { quickSort } from '../../data-structure/quick-sort'


test('Should sort arr by quick sort algorithm', () => {
  const original = [2, 1, 5, 6, 7, 2, 76, 3]
  expect(quickSort(original)).toStrictEqual([1, 2, 2, 3, 5, 6, 7, 76])
})
