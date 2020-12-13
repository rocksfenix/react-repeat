import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Command = styled.div`
  background-color: #15642b;
  border-radius: 0.4em;
  font-size: 1.4em;
  padding: 0.6em;
  max-width: 600px;
  margin: 0 auto;
`

const Button = styled.button`
  border: 0;
  background: #0b9431;
  border-radius: 0.3em;
  margin-left: 0.5em;
  cursor: pointer;
  padding: 0.32em 0.6em;
  font-size: 0.9em;
`

export default function Install () {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }, [copied])

  return (
    <Command>
      <span>npm install react-repeat</span>
      <CopyToClipboard text={'npm install react-repeat'}
        onCopy={() => setCopied(true)}>
        <Button>
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </CopyToClipboard>
    </Command>
  )
}