import { Row, Col } from "antd";
import { Label } from "./Label";

export interface LabelWithValueProps {
  label: string;
  children: React.ReactElement | string;
}

export const LabelWithValue = ({ label, children }: LabelWithValueProps) => (
  <Row justify="start" align="top" style={{ margin: "6px 0 " }}>
    <Col>
      <Label>{label}</Label>
    </Col>
    <Col>{children}</Col>
  </Row>
);
