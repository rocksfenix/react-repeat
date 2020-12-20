

// Base example

export const example1 = `
<Repeat size={6}>
  <li>🍌</li>
</Repeat>
`.trim()

export const example2 = `
<Repeat size={6}>
  <li>🍌</li>
  <li>🍓</li>
</Repeat>
`.trim()

export const example3 = `
<Repeat size={5}>
  <li>🍌</li>
  <li>🍓</li>
  <li>🍏</li>
</Repeat>
`.trim()

export const example4 = `
<Repeat size={5} shuffle>
  <li>🍉</li>
  <li>🍌</li>
</Repeat>
`.trim()

export const example5 = `
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

render (
  <div>
    <Repeat size={10}>
      <BannanaButton />
      <Counter />
    </Repeat>
  </div>
)
`.trim()

export const example6 = `
function Button ({ message, onSayHello }) {
  return (
    <button onClick={() => onSayHello(message)}>
      Hello
    </button>
  )
}


const App = () => {

  function handle (message) {
    alert(message)
  }

  return (
    <div>
      <Repeat size={6}>
        <Button
          onSayHello={handle}
          message='This is cool!'  
        />
      </Repeat>
    </div>
  )
}

render(
  <App />
)
`.trim()
