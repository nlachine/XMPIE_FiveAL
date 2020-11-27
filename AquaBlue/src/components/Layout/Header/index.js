/**
 * @function Header - contains all the components of the header section
 *
 * @param {object} categoriesTree - a list of CategoryTreeNodeModel. Each node should contain:
 * 		Category {object} - CategoryModel
 * 		SubCategories {object} - list of CategoryTreeNodeModel
 * @param {object} currencies - all currencies - should contain:
 *    ID {string} - unique currency id
 *    Symbol {string} - the currency character
 *    Code {string} - the currency name
 * @param {object} currentCurrency - the selected currency - should contain:
 *    ID {string} - unique currency id
 *    Symbol {string} - the currency character
 *    Code {string} - the currency name
 * @param {object} cultures - all cultures - should contain:
 *    ID {string} - unique culture id
 *    Flag {string} - the flag file name
 *    DisplayName {string} - the language name
 * @param currentCulture - the selected culture - should contain:
 *    ID {string} - unique culture id
 *    Flag {string} - the flag file name
 *    DisplayName {string} - the language name
 * @param currentUser - should contains at least FirstName
 */

import React, { Component } from 'react'
import { throttle } from 'throttle-debounce'
import { UStoreProvider } from '@ustore/core'
import Search from './Search'
import CategoriesNavbar from './CategoriesNavbar'
import CategoriesSidebar from './CategoriesSidebar'
import Profile from './Profile'
import SignOut from './SignOut'
import SignIn from './SignIn'
import Overlay from '$core-components/Overlay'
import Switcher from '$core-components/Switcher'
import Cart from "./Cart"
import './Header.scss'
import { Router, Link } from '$routes'
import urlGenerator from '$ustoreinternal/services/urlGenerator'
import legacyIframeHandler from '$ustoreinternal/services/legacyIframeHandler'
import { t } from '$themelocalization'
import { setCookie, isServer } from "$ustoreinternal/services/utils";
import { getVariableValue } from "$ustoreinternal/services/cssVariables";
import theme from '$styles/_theme.scss'
import Icon from '$core-components/Icon'
import themeContext from '$ustoreinternal/services/themeContext'
import Dropdown from '../../../core-components/MiniComponents/Dropdown'

class Header extends Component {
  constructor() {
    super();
    this.header = React.createRef();		// A reference to the main wrapper element

    this.state = {
      drawerOpen: false,						    // Left drawer - opened/closed
      overlayActive: false,	  			    // The overlay - active or not
      logoImageUrl: require(`$assets/images/FiveAm-Logo-Black.png`)
    }
  }

  componentDidMount() {
    // const { currentStore } = this.props
    // document.title = document && document.title && currentStore ? currentStore.Name : '';

    window.addEventListener('resize', this.onResize);
    throttle(250, this.onResize);					// Call this function once in 250ms only

    setCookie('_cookieRibbonNotShownYet', 0)
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  // NOTE: this is not supported in SSR
  setLogoImage = () => {
    const variableForLogoImg = window.matchMedia(`(min-width: ${theme.lg})`).matches ? '--logo-image' : '--logo-image-mobile'
    this.setState({ logoImageUrl: getVariableValue(variableForLogoImg, require(`$assets/images/FiveAm-Logo-Black.png`), true) })
  }

  onResize = () => {
    this.setLogoImage()
  }

  drawerStateChange(open) {
    this.setState({ drawerOpen: open })
    this.setState({ overlayActive: open })

    if (open) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
  }

  burgerClicked() {
    this.drawerStateChange(true)
  }

  overlayClicked() {
    this.drawerStateChange(false)
  }

  getFlagFromCode(languageCode) {
    return `${languageCode}.svg`
  }

  render() {
    if (!this.props.customState) {
      return null
    }

    const { customState: { categoriesTree, userOrdersSummary }, currencies, cultures, currentCulture, currentUser, currentCurrency } = this.props

    const currenciesViewModel = currencies && currencies.map(({ ID, Symbol, Code }) => ({
      ID, sign: Symbol, value: Code
    }))

    const culturesViewModel = cultures && cultures.map(({ ID, CountryCode, Name }) => ({
      ID, icon: this.getFlagFromCode(CountryCode), value: Name
    }))

    const currencySelected = (selected) => {
      const selectedCurrency = currencies.find(i => i.ID === selected)
      UStoreProvider.state.culture.setCurrentCurrency(selectedCurrency)
      themeContext.set('currencyFriendlyID', selectedCurrency.FriendlyID)
      setCookie('_currencyID', selectedCurrency.FriendlyID)
      legacyIframeHandler.postMessage({
        type: '@CHANGE_CURRENCY',
        data: selectedCurrency.FriendlyID
      })
    }

    const cultureSelected = (selected) => {
      const selectedCulture = cultures.find(i => i.ID === selected)
      const pathWithNewLangugageCode = window.location.pathname.replace(/\/[a-z]{2}-[A-Za-z]{2}\//, `/${selectedCulture.LanguageCode}/`)
      const searchString = window.location.search
      const hashString = window.location.hash
      window.location.replace(pathWithNewLangugageCode + searchString + hashString)
    }

    const sidebarRedirect = (pageParams) => {
      this.drawerStateChange(false)
      Router.pushRoute(urlGenerator.get(pageParams))
    }

    const variableForLogoImg = isServer() ? '--logo-image' : window.matchMedia(`(min-width: ${theme.lg})`).matches ? '--logo-image' : '--logo-image-mobile'
    const currentLogo = getVariableValue(variableForLogoImg, require(`$assets/images/FiveAm-Logo-Black.png`), true)

    return (
      <div className='header' >
        <div className='header-stripe' ref={(ref) => this.header = ref} draweropen={`${this.state.drawerOpen}`}>
          <div className="logo-wrapper">
            <div className="menu-icon-container" onClick={this.burgerClicked.bind(this)}>
              <Icon name="menu.svg" width="23px" height="20px" className="menu-icon" />
            </div>
            <Link to={urlGenerator.get({ page: 'home' })}>
              <a>
                <div className="logo-container">
                  {currentLogo && <img className="logo" src={currentLogo} alt="logo" />}
                </div>
              </a>
            </Link>
          </div>

          <Dropdown />
          <a className="navbar-link" href={urlGenerator.get({ page: 'AllBoxPatterns' })}>Patterns</a>
          <a className="navbar-link" href={urlGenerator.get({ page: 'AllGifts' })}>Gifts</a>
          <a className="navbar-link" href={urlGenerator.get({ page: 'Corporate' })}>Corporate</a>
          <a className="navbar-link" href={urlGenerator.get({ page: 'AboutUs' })}>About Us</a>
          <a className="navbar-link" href={urlGenerator.get({ page: 'FAQ' })}>FAQ</a>
          {/* <a className="navbar-link" href="http://localhost:5000/ustorethemes/AquaBlue/7/en-US/Favourites/">Favourites</a>
          <Dropdown />
          <a className="navbar-link" href="http://localhost:5000/ustorethemes/AquaBlue/7/en-US/Business/">Business</a>
          <a className="navbar-link" href="http://localhost:5000/ustorethemes/AquaBlue/7/en-US/AboutUs/">About Us</a>
          <a className="navbar-link" href="http://localhost:5000/ustorethemes/AquaBlue/7/en-US/FAQ/">FAQ</a> */}
          <div className="nav-spacer" />
          <div className="right-icons">
            {currentUser && <Profile currentUser={currentUser} userOrdersSummary={userOrdersSummary} />}
            <Cart />
          </div>
          <div className="drawer-wrapper">
            {currentUser && currentUser.IsAnonymous ? <SignIn showTitle={false} /> : <SignOut currentUser={currentUser} />}
            <div className="sidebar-link-container">
              <a className="sidebar-link" href={urlGenerator.get({ page: 'Occasions' })}>Occasions</a>
              <a className="sidebar-link" href={urlGenerator.get({ page: 'AllBoxPatterns' })}>Patterns</a>
              <a className="sidebar-link" href={urlGenerator.get({ page: 'AllGifts' })}>Gifts</a>
              <a className="sidebar-link" href={urlGenerator.get({ page: 'Corporate' })}>Corporate</a>
              <a className="sidebar-link" href={urlGenerator.get({ page: 'AboutUs' })}>About Us</a>
              <a className="sidebar-link" href={urlGenerator.get({ page: 'FAQ' })}>FAQ</a>
            </div>
          </div>
          <Overlay isActive={this.state.overlayActive} overlayClicked={this.overlayClicked.bind(this)} />
        </div>
      </div>

    )
  }
}

export default Header
