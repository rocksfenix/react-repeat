/**
 * Returns the list shuffled
 * @param {T[]} array
 * @returns {any}
 */
export default function randomShuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,  randomIndex

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}