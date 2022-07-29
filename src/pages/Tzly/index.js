import MenuBar from "../../components/MenuBar/index.js"
import Footer from "../../components/Footer/index.js"
import { Row, Col } from 'antd'
import ArticalCardL from '../../components/ArticalCardL'
import ArticalCardR from '../../components/ArticalCardR'
import './index.scss'
import axios from 'axios'
import { useEffect, useState } from "react"

function Tzly () {
  const [articaldata, setarticalData] = useState([
    {
      title: '',
      data: ''
    }
  ])
  console.log(articaldata)

  useEffect(() => {
    async function getText () {
      const text = await axios.get('/data/data.json')
      // console.log(text.data)
      setarticalData(text.data)
    }
    getText()
  }, [])

  return (
    <div>
      <MenuBar>
      </MenuBar>
      <div className="container">
        <Row justify="center">
          <Col xs={24} lg={6} className="content-title-en">INVESTMENT FIELD</Col>
        </Row>
        <Row justify="center">
          <Col xs={24} lg={6} className="content-title">投资领域</Col>
        </Row>
        <Row justify="center">
          <ArticalCardL imgStyle={{ backgroundImage: "url(" + require("../../assets/images/1.png") + ")" }} title={articaldata[0].title} info={articaldata[0].data}></ArticalCardL>
        </Row>
        <Row justify="center">
          <ArticalCardR imgStyle={{ backgroundImage: "url(" + require("../../assets/images/2.png") + ")" }}></ArticalCardR>
        </Row>
        <Row justify="center">
          <ArticalCardL imgStyle={{ backgroundImage: "url(" + require("../../assets/images/3.png") + ")" }}></ArticalCardL>
        </Row>
        <Row justify="center">
          <ArticalCardR imgStyle={{ backgroundImage: "url(" + require("../../assets/images/4.png") + ")" }}></ArticalCardR>
        </Row>
      </div>
      <Footer>
      </Footer>
    </div >
  )
}


export default Tzly