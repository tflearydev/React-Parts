import React from 'react';
import { Menu, Dropdown, Button, Icon, message  } from 'antd';
// import './App.scss';

// function Drop() {

//   return (

//   <div className="App">
//     <Button type="primary">Button</Button>
//   </div>
//   )

// };

// export default Drop;


function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      Spanish
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      German
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      Latin
    </Menu.Item>
  </Menu>
);

function Drop() {

  return (
  <div id="components-dropdown-demo-dropdown-button">
    {/* <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
      Dropdown
    </Dropdown.Button> */}
    <Dropdown overlay={menu}>
      <Button className="antbtn">
        English <Icon type="down" />
      </Button>
    </Dropdown>
  </div>
);

}

export default Drop;