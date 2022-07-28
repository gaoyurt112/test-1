import { Row, Col, Menu, Dropdown, Space, Typography, Breadcrumb } from 'antd'
import { HomeOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import './App.scss'
import logo from './assets/images/logo.png'

const items = [
  {
    label: '走进宏大',
    key: '1',
  },
  {
    label: '企业文化',
    key: '2',
  },
  {
    label: '新闻中心',
    key: '3',
  },
  {
    label: '投资领域',
    key: '4',
  },
  {
    label: '代表项目',
    key: '5',
  },
  {
    label: '社会责任',
    key: '6',
  },
  {
    label: '党群工作',
    key: '7',
  },
  {
    label: '合作共赢',
    key: '8',
  },
  {
    label: '联系我们',
    key: '9',
  },
]

const menu = (
  <Menu
    selectable
    items={items}
  />
)

function App () {
  //监听尺寸
  const [pageWidth, setpageWidth] = useState(1200)

  useEffect(() => {
    const setWidth = () => {
      setpageWidth(document.body.clientWidth)
    }
    window.addEventListener('resize', setWidth)
  }, [])


  const onClick = (e) => {
    console.log('click ', e)
  }

  const menuChaneg = () => {
    if (pageWidth < 1200) {
      return (
        <Dropdown overlay={menu}>
          <Typography.Link>
            <Space>
              <MenuUnfoldOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
      )
    } else {
      return (
        < Menu onClick={onClick} mode="horizontal" items={items} />
      )
    }
  }
  return (
    <div className="App">
      <div className='bgc'>
        <Row className="menu">
          <Col xs={20} lg={8} className="logo">
            <img src={logo} alt="宏达集团" />
          </Col>
          <Col xs={4} lg={16} className="menubar">
            {menuChaneg()}
          </Col>
        </Row>
        <Row>
          <Col span={5} offset={4} className="info">
            <div className='info-title'>投资领域</div>
            <div className='info-line'>
              <span></span>
            </div>
            <div className='info-title2'>INVESTMENT FIELD</div>
          </Col>
        </Row>
      </div>
      <Row className='Breadcrumb'>
        <Col xs={9} span={3} offset={4}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              <HomeOutlined />
              &nbsp;&nbsp;首页
            </Breadcrumb.Item>
            <Breadcrumb.Item>投资领域</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <div className='container'>
        <Row justify="center">
          <Col xs={24} lg={6} className="content-title-en">INVESTMENT FIELD</Col>
        </Row>
        <Row justify="center">
          <Col xs={24} lg={6} className="content-title">投资领域</Col>
        </Row>
        <Row justify="center">
          <Col span={16} className="tdyj">1200 400</Col>
        </Row>
        <Row justify="center">
          <Col span={16}></Col>
        </Row>
        <Row justify="center">
          <Col span={16}></Col>
        </Row>
        <Row justify="center">
          <Col span={16}></Col>
        </Row>

      </div>






    </div>
  )
}

export default App
