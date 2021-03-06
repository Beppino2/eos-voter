// @flow
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { I18n } from 'react-i18next';

import WalletLanguage from './Wallet/Language';
import WalletLockState from './Wallet/LockState';
import logo from '../../renderer/assets/images/greymass.png';

export default class BasicMenu extends Component<Props> {
  render() {
    const {
      actions,
      activeItem,
      handleItemClick,
      locked,
      settings,
      validate,
      wallet
    } = this.props;
    return (
      <I18n ns="menu">
        {
          (t) => (
            <Menu
              attached
              inverted
              size="large"
            >
              <Menu.Item
                name="producers"
                icon="check square"
                content={t('producer_voting')}
                active={activeItem === 'producers'}
                onClick={handleItemClick}
              />

              {(settings.account)
                ? (
                  <Menu.Item
                    name="wallet"
                    icon="protect"
                    content={t('wallet')}
                    active={activeItem === 'wallet'}
                    onClick={handleItemClick}
                  />
                )
                : false
              }

              <Menu.Menu position="right">
                <WalletLanguage
                  actions={actions}
                  key="language"
                  settings={settings}
                />
                <WalletLockState
                  actions={actions}
                  key="lockstate"
                  locked={locked}
                  validate={validate}
                  wallet={wallet}
                />
                <Menu.Item
                  name="about"
                  position="right"
                  active={activeItem === 'about'}
                  onClick={handleItemClick}
                >
                  <img alt="Greymass" src={logo} />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          )
        }
      </I18n>
    );
  }
}
