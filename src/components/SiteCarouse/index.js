import React from 'react';
import {cp1} from '../../statics/images';
import {
    Carousel,
    Row, Col
} from 'antd';
import ReactDragListView from 'react-drag-listview/lib/index.js';
class SiteCarousel extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <Carousel effect={this.props.effect}> 
                <div>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8}><img style={{position:"absolute",top:0}} src={cp1} alt="hi" ></img></Col>
                        <Col span={8}></Col>
                    </Row>               
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
          </Carousel>
           )
        }
    }
export default SiteCarousel;