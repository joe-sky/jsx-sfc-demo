import React, { useState } from 'react';
import logo from './logo.svg';
import sfc from 'jsx-sfc';
import styled from 'styled-components';

interface AppProps {
  title?: string;
}

const App = sfc<AppProps>()({
  template: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data.title}</p>
        <p>
          <button className="App-button" onClick={data.onClick}>
            count is: {data.count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </p>
      </header>
    </Wrapper>
  ),

  Component: (props) => {
    const [count, setCount] = useState(0);

    return {
      ...props,
      count,
      setCount,
      onClick: () => setCount((count) => count + 1)
    };
  },

  styles: {
    Wrapper: styled.div`
      text-align: center;

      .App-logo {
        height: 40vmin;
        pointer-events: none;
        animation: App-logo-spin infinite 20s linear;
      }

      .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }

      .App-link {
        color: #61dafb;
      }

      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .App-button {
        font-size: 'calc(10px + 2vmin)';
      }
    `
  }
});

App.defaultProps = {
  title: 'Hello jsx-sfc!'
};

export default App;
