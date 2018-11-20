import React, { Component } from 'react';
import IconMenuItem from './IconMenuItem';

import '../styles/boomers-iconized-menu.css';

class IconMenu extends Component {

  constructor () {
    super();
    this.renderMenuIcons = this.renderMenuIcons.bind(this);
    this.renderMenuContent = this.renderMenuContent.bind(this);
    this.selectMenuItem = this.selectMenuItem.bind(this);
  }

  componentDidMount () {
    this.setState({ selectedMenuItem: null });
  }

  selectMenuItem(menuItemId) {
    if (this.state.selectedMenuItem === menuItemId) {
      this.setState({ selectedMenuItem: null });  
    } else {
      this.setState({ selectedMenuItem: menuItemId });
    }
  }

  renderMenuIcons() {
    return React.Children.map(this.props.children, child => {
      
      if (child.type.name === "IconMenuItem") {

        return (
          <IconMenuItem 
            icon={child.props.icon} 
            color={this.props.iconColor}
            onHoverColor={this.props.iconColorOnHover}
            onClick={() => this.selectMenuItem(child.props.icon)}  />
        );
      }
      
      return child;
    });
  }

  renderMenuContent() {
    const self = this;

    return React.Children.map(this.props.children, child => {
      
      const content = child.props.children? child.props.children : '';
      var isVisible = false;
      
      if (self.state !== null && self.state.selectedMenuItem === child.props.icon) {
        isVisible = true;
      }

      var classes = "boomers-menu-content-area";
      if (isVisible) {
        classes += " selected";
      }
      
      return (
        <div className={classes}>
          { content }    
        </div>
      );
    });
  }

  render () {
    return (
      <div id='boomers-menu-wrapper'>
        <div id="boomers-menu-icon-area">
          <ul>
           {this.renderMenuIcons()}
          </ul>
        </div>

        {this.renderMenuContent()}
      </div>
    );
  }
}

export default IconMenu;