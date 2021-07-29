import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import { Image } from 'antd';
import style from './skills.module.less';
import { Tooltip, Button } from 'antd';
import { Divider } from 'antd';

const skills = ["golang", "python", "reactjs", "elastic", "mongodb", "redis", "linux", "mysql", "posgresql", "docker", "kibana", "git", "nodejs", "english", "german"]
const SkillsProgress = () => (
  <Row gutter={[5, 5]}>
    {/* <Divider /> */}
    {
      skills.map((val, key) => (
        <div className={style.SkillsRow}>
          <div className={style.SkillsRowBlock}>
            <Col xs={24} sm={24} md={12} lg={24}>
              {/* <Tooltip placement="topLeft" title={val}> */}
              <Image
                key={key}
                preview={false}
                alt={val}
                width={64}
                src={val + ".png"}
              />
              <h4 style={{textTransform: 'capitalize'}}>{val}</h4>
              {/* </Tooltip> */}
            </Col>
          </div>
        </div>
      ))
    }
  </Row>
);

export default SkillsProgress;
