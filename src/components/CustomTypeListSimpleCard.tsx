import { Col, Card, Row } from "antd";
import { LabelWithValue } from "./LabelWithValue";
import dayjs from "dayjs";
import { dataSourceProps } from "./ListSimpleCardWithSchema";

const customTypeListSimpleCardConfig = {
  orderId: "订单号",
  createTime: {
    label: "下单时间",
    type: ({ value }: { value: any }) => (
      <div>{`${dayjs(value).format("YYYY-MM-DD HH:mm:ss")}`}</div>
    ),
  },
  num: {
    label: "下单数量",
    type: ({ value }: { value: string }) => <div>{`x${value}`}</div>,
  },
  money: {
    label: "总金额",
    type: ({ value }: { value: string }) => <div>{`¥${value}`}</div>,
  },
  userName: "用户名",
  userId: "用户ID",
};

export const CustomTypeListSimpleCard = ({
  dataSource,
  schema = customTypeListSimpleCardConfig,
}: {
  dataSource: dataSourceProps;
  schema: any;
}) => {
  const renderItem = (config: any, value: any) => {
    let resolveLabel = config;
    let resolveValue = value;
    const isObject = typeof config === "object";
    if (isObject && config.render) {
      resolveLabel = config.label;
      resolveValue = config.render(value);
    } else if (isObject && config.type) {
      resolveLabel = config.label;
      const Type = config.type;
      resolveValue = <Type value={value} />;
    }

    return (
      <Col span="12">
        <LabelWithValue label={resolveLabel} children={resolveValue} />
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
