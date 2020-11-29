import React from 'react'

// Utilities
import getClonedToFill from '../utils/get-cloned-to-fill'
import useRandomList from '../hooks/use-random-list'

interface Props {
  size: number
  shuffle: boolean
  children: Children
}

type Children = (React.ReactChild | React.ReactFragment | React.ReactPortal)

export const Repeat = (props: Props): Children => {
  const { children: rootChildren, size, shuffle } = props

  let children = getClonedToFill(rootChildren, size)

  const shuffleList = useRandomList(shuffle, size)

  if (shuffle) {
    children = shuffleList.map((index) => children[index])
  }

  return <React.Fragment>{children}</React.Fragment>
}
