import { Card, Col, Row, Tag } from "antd";
import { ImgList } from "./ImgList";
import { LabelWithValue } from "./LabelWithValue";

export interface BaseProps {
  dataSource: {
    orderId: string;
    createTime: string;
    num: string;
    money: string;
    level: number;
    userName: string;
    userId: string;
    goodsList: string[];
  };
}

export const SimpleCard = ({
  dataSource: {
    orderId,
    createTime,
    num,
    money,
    level,
    userName,
    userId,
    goodsList,
  },
}: BaseProps) => (
  <Card bodyStyle={{ padding: "6px 12px" }}>
    <Row>
      <Col span="12">
        <LabelWithValue label="订单号">{orderId}</LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="下单时间">{createTime}</LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="下单数量">{num}</LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="总金额">{money}</LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="用户名">
          <Row gutter={12} align="middle">
            <Col>{userName}</Col>
            <Col>
              <Tag color="red">LV{level}</Tag>
            </Col>
          </Row>
        </LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="用户ID">{userId}</LabelWithValue>
      </Col>
      <Col span="12">
        <LabelWithValue label="商品信息">
          <ImgList urlList={goodsList} />
        </LabelWithValue>
      </Col>
    </Row>
  </Card>
);
