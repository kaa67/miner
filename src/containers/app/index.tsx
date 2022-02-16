import React, { useEffect, useLayoutEffect } from 'react'
import { Layout } from 'antd';

import { setDimension, tick } from '../../store/models/app'
import Navbar from './navbar'
import Stat from './stat'
import Welcome from '../welcome'
import Config from '../config'
import Game from '../game'

const App: React.FC = () => {
  const { Header, Content } = Layout

  useLayoutEffect(() => {
    const set = () => setDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })

    window.addEventListener('resize', set)
    set()

    return () => window.removeEventListener('resize', set)
  }, []);

  useEffect(() => {
    setInterval(() => tick(), 1000)
  }, []);

  return (
    <Layout className="layout">
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Stat/>
        <main style={{ padding: '32px' }}>
          <Welcome />
          <Game />
          <Config />
        </main>
      </Content>
    </Layout>
  )
}

export default App
