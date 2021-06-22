import React from 'react'

import logo from '../assets/logo.svg'
import Player from '../containers/player'
import Header from '../layout/header'
import Main from '../layout/main'
import classNames from '../styles/home.scss'

export default () => (
  <>
    <Header className={classNames.home__header}>
      <a href="/">
        <img className={classNames.home__header__logo} src={logo} alt="logo" />
      </a>
    </Header>
    <Main className={classNames.home__main}>
      <Player className={classNames.home__main__player} />
    </Main>
  </>
)
