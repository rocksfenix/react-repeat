/**
 * Returns an array with of sequential numbers with specific length.
 * getNumberList(3) => [ 0, 1, 2 ]
 * getNumberList(4) => [ 0, 1, 2, 4 ]
 * @param {number} size
 * @param {number} start
 * @returns {Array}
 */
export default function getNumberList (size: number, start: number = 0): number[] {
  return Array(size)
    .fill(null)
    .map((_, index) => start + index)
}
