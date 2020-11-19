import { useState, useEffect } from 'react'
import randomShuffle from '../utils/random-shuffle'
import getNumberList from '../utils/get-number-list'

/**
 * A React Hook that return a shuffle list if is active
 * @param {boolean} active
 * @param {number} size=0
 * @returns {array}
 */
export default function useRandomList (active: boolean, size: number = 0): number[] {
  const [shuffle, setShuffle] = useState<number[]>([])

  useEffect(() => {
    if (active) {
      const randomList = randomShuffle(
        getNumberList(size)
      )
      setShuffle(randomList)
    }
  }, [active])

  return shuffle
 }
 