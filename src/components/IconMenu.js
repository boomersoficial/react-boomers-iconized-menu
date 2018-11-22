import React, { Component } from 'react';
import IconMenuItem from './IconMenuItem';
import uuidv4 from 'uuid/v4';

import '../styles/boomers-iconized-menu.css';

class IconMenu extends Component {

  constructor () {
    super();

    this.renderMenuContent = this.renderMenuContent.bind(this);
    this.selectMenuItem = this.selectMenuItem.bind(this);

    this.injectedItems = [];
  }

  componentDidMount () {
    this.setState({ selectedMenuItem: null });
    this.injectedItems = this.injectItemsBehaviour();
  }

  injectItemsBehaviour () {
    const injectedItems = React.Children.map(this.props.children, child => {
      
      if (child.type.name === "IconMenuItem") {
        const itemKey = uuidv4();

        return (
          <IconMenuItem 
            icon={child.props.icon} 
            color={this.props.iconColor}
            onHoverColor={this.props.iconColorOnHover}
            key={itemKey.toString()}
            itemKey={itemKey}
            onClick={() => this.selectMenuItem(itemKey)}>

            {child.props.children}  
          </IconMenuItem>
        );
      }
      
      return child;
    });

    return injectedItems;
  }

  selectMenuItem(menuItemKey) {
    if (this.state.selectedMenuItem === menuItemKey) {
      this.setState({ selectedMenuItem: null });  
    } else {
      this.setState({ selectedMenuItem: menuItemKey });
    }
  }

  renderMenuContent() {
    const self = this;

    return this.injectedItems.map(child => {
      const content = child.props.children? child.props.children : '';

      var isVisible = false;
      
      if (self.state && self.state.selectedMenuItem === child.props.itemKey) {
        isVisible = true;
      }

      var classes = "boomers-menu-content-area";
      if (isVisible) {
        classes += " selected";
      }
      
      return (
        <div className={classes} key={child.props.itemKey}>
          { content }    
        </div>
      );
    });
  }

  render () {
    return (
      <div id='boomers-menu-wrapper'>
        <div id="boomers-menu-icon-area" >
          <ul>
           {this.injectedItems}
          </ul>
        </div>

        {this.renderMenuContent()}
      </div>
    );
  }
}

export default IconMenu;