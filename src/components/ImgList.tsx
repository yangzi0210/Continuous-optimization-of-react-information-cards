import { Avatar, Col, Row } from "antd";

export interface ImgListProps {
  urlList: string[];
}

export const ImgList = ({ urlList }: ImgListProps) => (
  <Row gutter={12}>
    {urlList.map((url) => (
      <Col>
        <Avatar shape="square" size={64} src={url} />
      </Col>
    ))}
  </Row>
);
