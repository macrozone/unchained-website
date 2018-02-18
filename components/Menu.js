import React from 'react';
import { injectIntl } from 'react-intl';
import { compose } from 'recompose';
import ActiveLink from './ActiveLink';

// active matching, wait for: https://github.com/zeit/next.js/pull/2352

const Menu = ({ intl, hidden, ...props }) => (
  <div className={`menu ${hidden ? 'hidden' : ''}`} {...props}>
    <div className="menu__items">
      <ActiveLink activeClassName="active" href="/mission">
        <a className="menu__link">{intl.formatMessage({ id: 'mission' })}</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/faq">
        <a className="menu__link">{intl.formatMessage({ id: 'faq' })}</a>
      </ActiveLink>
      {/* <ActiveLink activeClassName="active" href="/shop">
        <a className="menu__link">{intl.formatMessage({ id: 'shop' })}</a>
      </ActiveLink> */}
      <ActiveLink activeClassName="active" href="/fundraiser">
        <a className="menu__link">{intl.formatMessage({ id: 'fundraiser' })}</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/team">
        <a className="menu__link">{intl.formatMessage({ id: 'team' })}</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/contact">
        <a className="menu__link">{intl.formatMessage({ id: 'contact' })}</a>
      </ActiveLink>
    </div>
    <style jsx global>{`

      @media (min-width: 1220px) {
        .menu-switch {
          display: none !important;
        }
        .menu__items {
          font-size: 24px;
        }
        .menu__link {
          display: inline-block;
        }
        .menu__link + .menu__link {
          margin-left: 1em;
        }
        .menu {
          order: 1;
        }
        .lang-switch {
          order: 2;
        }
      }

      @media (max-width: 1219px) {
        .menu.hidden {
          opacity: 0;
          transform: translateY(-900px);
        }
        .menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          background-color: #FFF;
          box-shadow: 0 2px 9px 5px rgba(0,0,0,.21);
          transform: translateY(0);
          opacity: 1;
          transition: .3s ease-in-out all;
        }
        .menu__items {
          padding: 1em;
          font-size: 28px;
        }
        .menu__link {
          display: block;
        }
        .menu__link + .menu__link {
          margin-top: 1em;
        }
      }

      .menu__link {
        text-transform: lowercase;
      }

      @media (min-width: 1220px) {
        .menu-switch {
          display: none !important;
        }
        .menu__items {
          font-size: 20px;
        }
        .menu__link + .menu__link {
          margin-left: 1.5em;
        }

        /* Underline From Center */
        .menu__link {
          display: inline-block;
          vertical-align: middle;
          -webkit-transform: perspective(1px) translateZ(0);
          transform: perspective(1px) translateZ(0);
          box-shadow: 0 0 1px transparent;
          position: relative;
          overflow: hidden;
        }
        .menu__link:before {
          content: "";
          position: absolute;
          z-index: -1;
          left: 50%;
          right: 50%;
          bottom: 0;
          background: #68E280;
          height: 2px;
          -webkit-transition-property: left, right;
          transition-property: left, right;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
          -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
        }
        .menu__link:hover:before, .menu__link:focus:before, .menu__link:active:before, .menu__link.active:before {
          left: 0;
          right: 0;
        }
      }

    `}
    </style>

  </div>
);
export default compose(injectIntl)(Menu);
