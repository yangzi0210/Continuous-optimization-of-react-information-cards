import { Card, Col, Row, Tag } from "antd";
import dayjs from "dayjs";
import { LabelWithValue } from "./LabelWithValue";
import { ImgList } from "./ImgList";

export const img1 =
  "https://oss-ata.alibaba.com/article/2023/11/c0a650cd-0a45-4a84-951a-bf2678124ceb.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1600/quality,Q_80/format,webp";
export const img2 =
  "https://oss-ata.alibaba.com/article/2023/11/5fe6f0a6-ca75-4786-a522-18b4eb12af8b.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1600/quality,Q_80/format,webp";
export const img3 =
  "https://oss-ata.alibaba.com/article/2023/11/8437ea53-1085-4e41-a613-dcb53e070624.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1600/quality,Q_80/format,webp";

export const DirectCard = () => (
  <Card bodyStyle={{ padding: "6px 12px" }}>
    <Row>
      <Col span="12">
        <LabelWithValue label="订单号">O202002020111020200</LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="下单时间">
          {dayjs("1603163471000").format("YYYY-MM-DD HH:mm:ss")}
        </LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="下单数量">x10</LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="总金额">¥200</LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="用户名">
          <Row gutter={12} align="middle">
            <Col>爱你一万年</Col>
            <Col>
              <Tag color="red">LV10</Tag>
            </Col>
          </Row>
        </LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="用户ID">10102301</LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="商品信息">
          <ImgList urlList={[img1, img2, img3]} />
        </LabelWithValue>
      </Col>
    </Row>
  </Card>
);
