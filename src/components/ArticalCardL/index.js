//文章卡片组件

//antd组件
import { Col, Button } from 'antd'
import './index.scss'
import { useEffect, useState } from 'react'

function ArticalCardL (props) {
  //解构父组件传递的数据
  const { imgStyle, info, title } = props
  //监听尺寸
  const [pageWidth, setpageWidth] = useState(1200)
  useEffect(() => {
    const setWidth = () => {
      setpageWidth(document.body.clientWidth)
    }
    window.addEventListener('resize', setWidth)

  }, [])

  //切换组件
  const ChangeText = () => {
    if (pageWidth < 992) {
      return (
        <div className="more">
          <Button type="text">More</Button>
        </div>
      )
    } else {
      return (
        <div>
          <div className="text-title">{title}</div>
          <div className="text-artical">
            {info}
          </div>
        </div>

      )

    }
  }

  return (
    <Col xs={20} sm={20} md={20} lg={16} className="artical-container">
      <div className='artical-img-1' style={imgStyle}></div>
      <div className='artical-bgc1'>
        <div className='artical-bgc-1'></div>
        <div className='artical-bgc-2'>
          <div className="text-content">

            {ChangeText()}
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ArticalCardL