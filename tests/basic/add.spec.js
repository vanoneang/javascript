const { add } = require('../../basic/currying')

beforeEach(() => {})

describe('currying', () => {
  test('add function', () => {
    
    expect(add(1)).toBe(1)
    expect(add(1)(2)).toBe(3)
    expect(add(1)(2)(3)).toBe(6)
  })
})