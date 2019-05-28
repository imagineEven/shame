import React from 'react';
import './App.css';
import { Layout, Menu, Icon, Breadcrumb, Radio, Modal, Dropdown, Button, Input, Form, message, Row, Col } from 'antd';
import { HashRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { Even, Option } from './components/MenuItem/index';
import { ECharts, Team, Bill, Alex, Tom } from './components/SubMenu/index';
const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

let routers = {
  'SubMenu': [
    {
      title: 'User',
      icon: 'dashboard',
      path: '/User',
      children: [
        { path: '/Bill', icon: 'reload', component: Bill },
        { path: '/Alex', icon: 'number', component: Alex },
        { path: '/FragmentSubMenu/Tom', icon: 'search', component: Tom }
      ]
    },
    {
      title: 'Plugin',
      icon: 'cloud',
      path: 'Plugin',
      children: [
        { path: '/ECharts', icon: 'pie-chart', component: ECharts },
        { path: '/Team', icon: 'key', component: Team },
      ]
    }
  ],
  'MenuItem': [
    { path: '/Even', icon: 'man', component: Even },
    { path: '/Option', icon: 'scan', component: Option },
  ]
};


class App extends React.Component {
  state = {
    collapsed: window.innerWidth <= 768 ? true : false,
    currentPath: '',
    name: 'even'
  };

  componentWillMount() {
    let { history } = this.props;
    // history.push('./FragmentMenuItem');
    // history.push({
    //   pathname: '/FragmentSubMenu',
    //   query: {
    //     EKey: 'what'
    //   }
    // });
  }

  onCollapse = collapsed => {
    console.log('collapsed', collapsed);
    console.log('this.state.collapsed', this.state.collapsed);
    this.setState({ collapsed });
  };

  handleOpenChange = key => {
    // console.log('key', key);
  }

  handleMenuSelect = (e) => {
    console.log('e.key', e);
    console.log('this.props', this.props);
    const { history } = this.props;
    console.log('history', history);
    // this.setState({
    //   'name': 'Levi'
    // });
    // 区分是一级菜单还是二级菜单; 这个是组件的方法；
    if (e.keyPath.length > 1) {
      console.log('> 1');
      // this.setState({
      //   'isShowFragmentSubMenu': true
      // });
      // history.push('/FragmentSubMenu');
      history.push({
        pathname: '/FragmentSubMenu',
        query: {
          EKey: '/FragmentSubMenu' + e.key
        }
      });
    } else {
      console.log('!> 1');
      // this.setState({
      //   'isShowFragmentSubMenu': false
      // });
      // history.push('/FragmentMenuItem');
      history.push({
        pathname: '/FragmentMenuItem',
        query: {
          EKey: e.key
        }
      });
    }
    // const { history } = this.props;
    // history.push(e.key);
  }

  render() {
    return (
      <div className="appwrapper">
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark"
              defaultSelectedKeys={['/Even']}
              defaultOpenKeys={['sub1', 'sub2']}
              onOpenChange={this.handleOpenChange}
              onClick={this.handleMenuSelect}
              mode="inline">
              {
                routers.MenuItem.map((item, index) => {
                  return (
                    <Menu.Item key={item.path}>
                      <Icon type={item.icon} />
                      <span>{item.path.slice(1, item.path.length + 1)}</span>
                    </Menu.Item>
                  );
                })
              }
              {
                routers.SubMenu.map((item, index) => {
                  return (
                    <SubMenu
                      key={item.path}
                      title={
                        <span>
                          <Icon type={item.icon} />
                          <span>{item.title}</span>
                        </span>
                      }
                    >
                      {
                        item.children.map((child, index) => {
                          return (
                            <Menu.Item key={child.path}>{child.path.slice(1, child.path.length + 1)}</Menu.Item>
                          );
                        })
                      }
                    </SubMenu>
                  );
                })
              }
            </Menu>
          </Sider>
          <Route path="/FragmentMenuItem" component={FragmentMenuItem}></Route>
          <Route path="/FragmentSubMenu" component={FragmentSubMenu}></Route>
        </Layout>
      </div>
    );
  }
}

class FragmentSubMenu extends React.Component {

  componentDidMount() {
    // 在这里做路由切换的逻辑；
    // console.log('this.componentWillMount');
    // console.log('this.history', this.props.history);
    // console.log('this', this);
    // console.log('this.props', this.props);
    // console.log(this.props.location);
    // console.log('this.props.location.query.EKey', this.props.location.query.EKey);
    
    this.props.history.push({
      pathname: this.props.location.query.EKey
    });
  }

  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps');
  // }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {
                routers.SubMenu.map((SubMenu, index) => (
                  SubMenu.children.map((child, index) => (
                    <Route path={'/FragmentSubMenu' + child.path} key={index} component={child.component}></Route>
                  ))
                  // <Route path={item.path} key={index} component={item.component}></Route>
                ))
              }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

class FragmentMenuItem extends React.Component {
  render() {
    return (
      <div>我是路由组件</div>
    );
  }
}


export default App;
