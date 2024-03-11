import { Col, Row } from "antd";

interface LabelProps {
  children: React.ReactElement | string;
}

export const Label = ({ children }: LabelProps) => (
  <Row style={{ width: "70px", color: "#666" }} justify="space-between">
    <Col>{children}</Col>
    <Col>：</Col>
  </Row>
);
