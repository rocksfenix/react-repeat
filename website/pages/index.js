import React from 'react'
import Header from '../components/header'
import LiveEditor from '../components/live-editor'
import Install from '../components/install'
import Description from '../components/description'
import Container from '../components/container'

import {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6
} from '../examples'

export default function Home() {
  return (
    <Container>
      <Header />
      <Install />
      <Description>You can pass the elements that you wanna repeat inside of the component, pass the number of repetitions with prop size:</Description>
      <LiveEditor code={example1} />
      <Description>You can pass diferent elements:</Description>
      <LiveEditor code={example2} />
      <Description>If you pass an odd number on ``size`` prop, the items will be repeated until to fill the length that you need it.</Description>
      <LiveEditor code={example3} />
      <Description>You can pass ``shuffle`` prop and the output elements will be randomized, only will calculated on first render.</Description>
      <LiveEditor code={example4} />
      <Description>You can pass any item not only HTML elements, example with React Components:</Description>
      <LiveEditor code={example5} noInline size={15}/>
      <Description>The props will be passed automatically on every clone component:</Description>
      <LiveEditor code={example6} noInline size={15} />
    </Container>
  )
}
