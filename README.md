# react-repeat

> React component for repeat components or elements effortless.

[![NPM](https://img.shields.io/npm/v/react-repeat.svg)](https://www.npmjs.com/package/react-repeat) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This component will you help to repeat components or elements to fill the length that you need.

## Install

```bash
npm install --save react-repeat
```

## Usage

You can pass the elements that you wanna repeat inside of the component ``<Repeat />`` this recibes a ``size`` prop with the length that you need, example:

```jsx
import Repeat from 'react-repeat'

const App = () => {
  return (
    <div>
      <Repeat size={6}>
        <li>🍌</li>
        <li>🍓</li>
      </Repeat>
    </div>
  )
}

// Output
<div>
  <li>🍌</li>
  <li>🍓</li>
  <li>🍌</li>
  <li>🍓</li>
  <li>🍌</li>
  <li>🍓</li>
</div>
```

If you pass an odd number on ``size`` prop, the items will be repeated until to fill the length that you need it.

```jsx
import Repeat from 'react-repeat'

const App = () => {
  return (
    <div>
      <Repeat size={5}>
        <li>🍌</li>
        <li>🍓</li>
        <li>🍏</li>
      </Repeat>
    </div>
  )
}

// Output
<div>
  <li>🍌</li>
  <li>🍓</li>
  <li>🍏</li>
  <li>🍌</li>
  <li>🍓</li>
</div>
```

You can pass ``shuffle`` prop and the output elements will be randomized.

```jsx
import Repeat from 'react-repeat'

const App = () => {
  return (
    <div>
      <Repeat size={5} shuffle>
        <li>🍉</li>
        <li>🍌</li>
      </Repeat>
    </div>
  )
}

// Output
<div>
  <li>🍉</li>
  <li>🍉</li>
  <li>🍌</li>
  <li>🍌</li>
  <li>🍉</li>
</div>
```

You can pass any item not only HTML elements, example with React Components:

```jsx
import Repeat from 'react-repeat'

function BannanaButton (props) {
  return <button>🍌 Banana Button</button>
}

function Counter (props) {
  const [count, setCount] = React.useState(0)

  function increment () {
    setCount(count + 1)
  }

  return (
    <button onClick={increment}>
      Count {count}
    </button>
  )
}

const App = () => {
  return (
    <div>
      <Repeat size={10}>
        <BannanaButton />
        <Counter />
      </Repeat>
    </div>
  )
}

// Output
<div>
  <BannanaButton />
  <Counter />
  <BannanaButton />
  <Counter />
  <BannanaButton />
  <Counter />
  <BannanaButton />
  <Counter />
  <BannanaButton />
  <Counter />
</div>
```

The props will be passed automatically on every clone component:

```jsx
import Repeat from 'react-repeat'

function Button ({ message, onSayHello }) {
  return (
    <button onClick={() => onSayHello(message)}>
      Hello
    </button>
  )
}


const App = () => {

  function handle (message) {
    console.log(message)
  }

  return (
    <div>
      <Repeat size={10}>
        <Button
          onSayHello={handle}
          message='This is cool!'  
        />
      </Repeat>
    </div>
  )
}

// Output
<div>
  <Button
    onSayHello={handle}
    message='This is cool!'  
  />
  <Button
    onSayHello={handle}
    message='This is cool!'  
  />
  <Button
    onSayHello={handle}
    message='This is cool!'  
  />
  <Button
    onSayHello={handle}
    message='This is cool!'  
  />
  <Button
    onSayHello={handle}
    message='This is cool!'  
  />
</div>
```


## Props

Prop Name          | Type      | Default    | Description |
------------------ | --------- | ---------- | ----------- |
size               | Number     | 0       | List length expected. |
shuffle            | Boolean    | false    | Randomize the elements |

-----

This component uses Standard JS

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## License

MIT © [rocksfenix](https://github.com/rocksfenix)
