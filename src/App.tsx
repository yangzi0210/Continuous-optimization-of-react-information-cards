import "./App.css";
import dayjs from "dayjs";
import { DirectCard, img1, img2, img3 } from "./components/DirectCard";
import { SimpleCard } from "./components/SimpleCard";
import { Space } from "antd";
import { ListSimpleCard } from "./components/ListSimpleCard";
import { ListSimpleCardWithSchema } from "./components/ListSimpleCardWithSchema";
import { CustomRenderListSimpleCard } from "./components/CustomRenderListSimpleCard";

const dataSource = {
  orderId: "11",
  createTime: dayjs("1603163471000").format("YYYY-MM-DD HH:mm:ss"),
  num: "1000",
  money: "1100",
  level: 100,
  userName: "爱你一万年",
  userId: "111",
  goodsList: [img1, img2, img3],
};

function App() {
  return (
    <Space direction="vertical">
      <DirectCard />
      <SimpleCard dataSource={dataSource} />
      <ListSimpleCard dataSource={dataSource} />
      <ListSimpleCardWithSchema dataSource={dataSource} />
      <CustomRenderListSimpleCard dataSource={dataSource} />
    </Space>
  );
}

export default App;
