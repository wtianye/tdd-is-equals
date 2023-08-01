import { isEquals } from ".";

describe("isEquals测试", () => {
  it("基本", () => {
    expect(isEquals(1, 1)).toBe(true);
    expect(isEquals(1, 2)).toBe(false);
    expect(isEquals(false, false)).toBe(true);
    expect(isEquals("1", "1")).toBe(true);
    expect(isEquals(null, null)).toBe(true);
    expect(isEquals(undefined, undefined)).toBe(true);
  });

  it("类型不同", () => {
    expect(isEquals(1, "1")).toBe(false);
    expect(isEquals(null, undefined)).toBe(false);
    expect(isEquals(0, undefined)).toBe(false);
    expect(isEquals(0, null)).toBe(false);
    expect(isEquals(0, false)).toBe(false);
    expect(isEquals(1, true)).toBe(false);
    expect(isEquals(null, NaN)).toBe(false);
    expect(isEquals(undefined, NaN)).toBe(false);
  });

  it("NaN相关", () => {
    expect(isEquals(NaN, NaN)).toBe(true);
  });

  it("0相关", () => {
    expect(isEquals(-0, +0)).toBe(true);
    expect(isEquals(0, +0)).toBe(true);
    expect(isEquals(-0, 0)).toBe(true);
  });

  it("对象相关", () => {
    expect(isEquals({ a: 1 }, { a: 1 })).toBe(true);
    expect(isEquals([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEquals([1, 2, "3"], [1, 2, 3])).toBe(false);
    expect(isEquals({ a: 1, b: [10, 20] }, { a: 1, b: [10, 20] })).toBe(true);
  });
});
