import { add } from '../src/calc'

describe("Test CALC", () => {
  it("should return 15 for add(10,5)", () => {
    expect(add(10,1)).toBe(15)
  })
})
