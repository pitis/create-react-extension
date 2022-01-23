import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Frame from 'react-frame-component'

ReactDOM.render(
  <React.StrictMode>
    <Frame
      scrolling='no'
      head={[
        <link
          key='0'
          type='text/css'
          rel='stylesheet'
          href={chrome.runtime.getURL('/react/index.css')}
        />,
      ]}
    >
      <App />
    </Frame>
  </React.StrictMode>,
  document.getElementById('root')
)
