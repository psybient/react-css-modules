import React from 'react';
import { Timeline, Icon } from 'antd';

function TimeLine() {
    return (
    <Timeline mode="alternate" style={{marginTop:20}}>
        <Timeline.Item>Create a services site 2019-12-17</Timeline.Item>
        <Timeline.Item color="green">Solve initial network problems 2019-12-17</Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
    </Timeline.Item>
        <Timeline.Item color="red">Network problems being solved 2019-12-17</Timeline.Item>
        <Timeline.Item>Create a services site 2019-12-17</Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            Technical testing 2019-12-17
    </Timeline.Item>
    </Timeline>);
}

export default TimeLine;

