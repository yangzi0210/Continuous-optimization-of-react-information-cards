import dayjs from "dayjs";
import { ImgList } from "./ImgList";
import { Col, Card, Row } from "antd";
import { ReactElement } from "react";
import { LabelWithValue } from "./LabelWithValue";
import { dataSourceProps } from "./ListSimpleCardWithSchema";

const customRenderListSimpleCardConfig = {
  orderId: "订单号",
  createTime: {
    label: "下单时间",
    render: (value: string | number | Date | dayjs.Dayjs | null | undefined) =>
      `${dayjs(value).format("YYYY-MM-DD HH:mm:ss")}`,
  },
  num: {
    label: "下单数量",
    render: (value: string) => `x${value}`,
  },
  money: {
    label: "总金额",
    render: (value: string) => `¥${value}`,
  },
  userName: "用户名",
  userId: "用户ID",
  goodsList: {
    label: "商品信息",
    render: (value: string[]) => <ImgList urlList={value} />,
  },
};

interface Config {
  label: string;
  render: any;
}

export type baseProps = {
  dataSource: dataSourceProps;
  schema?: {
    [K in keyof Omit<dataSourceProps, "level">]: Config | string;
  };
};

export const CustomRenderListSimpleCard = ({
  dataSource,
  schema = customRenderListSimpleCardConfig,
}: baseProps) => {
  const renderItem = (config: string | Config, value: string) => {
    const isObject = typeof config === "object";

    let resolveLabel = isObject ? (config as Config).label : config;
    let resolveValue: ReactElement | string =
      isObject && (config as Config).render
        ? (config as Config).render(value)
        : value;
    if (isObject) {
      resolveValue = (config as Config).render(value);
    }

    return (
      <Col span="12">
        <LabelWithValue label={resolveLabel as unknown as string}>
          {resolveValue}
        </LabelWithValue>
      </Col>
    );
  };
  return (
    <Card>
      <Row>
        {Object.keys(schema).map((key) =>
          //@ts-ignore
          renderItem(schema[key], dataSource[key])
        )}
      </Row>
    </Card>
  );
};
