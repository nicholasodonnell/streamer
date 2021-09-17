import React from 'react'

import logo from '../assets/logo.svg'
import Player from '../containers/player'
import Header from '../layout/header'
import Main from '../layout/main'
import classNames from '../styles/home.scss'

export default () => (
  <>
    <Header className={classNames.home__header}>
      <a className={classNames.home__header__logo} href="/">
        <img className={classNames.home__header__logo__image} src={logo} alt="logo" />
      </a>
    </Header>
    <Main className={classNames.home__main}>
      <Player />
    </Main>
  </>
)
