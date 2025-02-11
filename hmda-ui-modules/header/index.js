import React from 'react'
import BannerUSA from './BannerUSA.jsx'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Filing', href: '/filing/' },
  { name: 'Data Publication', href: '/data-publication/' },
  { name: 'Tools', href: '/tools/' }
]

const basename = window.location.pathname.split('/')[1]

const isLinkActive = href => {
  const linkClass = 'usa-nav-link'
  if (basename === href.replace(/\//g, '')) return linkClass.concat(' active')
  return linkClass
}

const Header = () => {
  return (
    <React.Fragment>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <header className="hmda-header usa-header usa-header-basic" role="banner">
        <BannerUSA />
        <div className="usa-nav-container">
          <div className="usa-logo" id="logo">
            <em className="usa-logo-text">
              <a className="usa-nav-link" href="/" aria-label="Home">
                <img alt="FFIEC" src="/img/ffiec-logo.svg" height="32" />
                Home Mortgage Disclosure Act
              </a>
            </em>
          </div>
          <nav className="usa-nav">
            <ul className="usa-nav-primary">
              {links.map(link => {
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={isLinkActive(link.href)}
                      target={link.name === 'Filing' ? '_blank' : null}
                      rel={
                        link.name === 'Filing' ? 'noopener noreferrer' : null
                      }
                    >
                      {link.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
