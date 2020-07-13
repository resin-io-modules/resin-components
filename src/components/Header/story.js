import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { Header, Button } from '../../'
import Readme from './README.md'
import Logo from '../../stories/assets/etcher.svg'
const defaultRoutes = [
  { title: 'What is balena?', path: 'what-is-balena' },
  { title: 'balenaCloud', path: 'cloud' },
  {
    title: 'Resources',
    routes: [
      {
        title: 'Docs',
        path: '/docs',
        blank: true,
        needsPrefix: true
      },
      { title: 'Forums', blank: true, path: 'https://forums.balena.io' },
      {
        title: 'Blog',
        path: '/blog',
        blank: true,
        needsPrefix: true
      },
      { title: 'Support', path: '/support' },
      {
        title: 'Projects',
        blank: true,
        path: 'https://github.com/balenalabs'
      },
      {
        title: 'Base Images',
        blank: true,
        path: 'https://hub.docker.com/u/balena/'
      }
    ]
  },
  { title: 'Pricing', path: '/pricing' },
  { title: 'Customers', path: '/customers' },
  {
    title: 'About',
    routes: [
      { title: 'Team', path: '/team' },
      { title: 'Jobs', blank: true, path: 'https://balena.workable.com/' },
      { title: 'Press', path: '/press' },
      { title: 'Contact', path: '/contact' }
    ]
  }
]

storiesOf('Core/Header', module)
  .addDecorator(withReadme(Readme))
  .add('Standard', () => {
    return (
      <Header
        logo={Logo}
        routes={defaultRoutes}
        actions={
          <Fragment>
            <Button plain primary>
              Login
            </Button>
            <Button ml={20} outline primary>
              Signup
            </Button>
          </Fragment>
        }
        >
        Content
      </Header>
    )
  })
