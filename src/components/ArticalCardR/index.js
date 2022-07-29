import { Col } from 'antd'
import './index.scss'

function ArticalCardR (props) {
  const { imgStyle } = props
  return (
    <Col xs={20} sm={20} md={20} lg={16} className="artical-container">
      <div className='artical-bgc2'>
        <div className='artical-bgc2-2'></div>
        <div className='artical-bgc2-1'></div>
      </div>
      <div className='artical-img-2' style={imgStyle}></div>
    </Col>
  )
}
export default ArticalCardR