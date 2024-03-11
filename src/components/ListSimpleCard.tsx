import { Card, Row, Col } from "antd";
import { LabelWithValue } from "./LabelWithValue";
import { BaseProps } from "./SimpleCard";

export const ListSimpleCard = ({ dataSource }: BaseProps) => (
  <Card>
    <Row>
      {Object.keys(dataSource).map((key) => (
        <Col span="12">
          {/* @ts-ignore */}
          <LabelWithValue label={key}>{dataSource[key]}</LabelWithValue>
        </Col>
      ))}
    </Row>
  </Card>
);
