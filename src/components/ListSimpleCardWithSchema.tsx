import { Card, Row, Col } from "antd";
import { LabelWithValue } from "./LabelWithValue";

export type dataSourceProps = {
  orderId: string;
  createTime: string;
  num: string;
  money: string;
  level: number;
  userName: string;
  userId: string;
  goodsList: string[];
};

export type schemaProps = Record<keyof Omit<dataSourceProps, "level">, string>;

export type schemeBaseProps = {
  dataSource: dataSourceProps;
  schema?: schemaProps;
};

const listSimpleCardSchema = {
  orderId: "订单号",
  createTime: "下单时间",
  num: "下单数量",
  money: "总金额",
  userName: "用户名",
  userId: "用户ID",
  goodsList: "商品信息",
};

export const ListSimpleCardWithSchema = ({
  dataSource,
  schema = listSimpleCardSchema,
}: schemeBaseProps) => (
  <Card>
    <Row>
      {Object.keys(schema).map((key) => (
        <Col span="12">
          {/* @ts-ignore */}
          <LabelWithValue label={schema[key]}>{dataSource[key]}</LabelWithValue>
        </Col>
      ))}
    </Row>
  </Card>
);
