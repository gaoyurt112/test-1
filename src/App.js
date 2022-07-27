import { Row, Col } from 'antd'
import './App.scss'
import logo from './assets/images/logo.png'

function App () {
  return (
    <div className="App">
      <Row className="menu" justify="space-between">
        <Col xs={24} lg={5} className="logo">
          <img src={logo} alt="" />
        </Col>
        <Col xs={24} lg={16} className="menuBar">
          <Row className='menu-btn' justify="end">
            <Col xs={8} lg={2}>走进宏大</Col>
            <Col xs={8} lg={2}>企业文化</Col>
            <Col xs={8} lg={2}>新闻中心</Col>
            <Col xs={8} lg={2}>投资领域</Col>
            <Col xs={8} lg={2}>代表项目</Col>
            <Col xs={8} lg={2}>社会责任</Col>
            <Col xs={8} lg={2}>党群工作</Col>
            <Col xs={8} lg={2}>合作共赢</Col>
            <Col xs={8} lg={2}>联系我们</Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default App
