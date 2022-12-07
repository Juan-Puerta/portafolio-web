import React, { useContext } from "react";
import CardItem from "../CardItem/CardItem";
import AppContext from "../../store/AppContext";
import { List } from "antd";
import "./ListCard.css";

const ListCard = () => {
  const state = useContext(AppContext);

  return (
    <List className="the-list"
      grid={{ column: 1 }}
      dataSource={state.info_tec}
      renderItem={(item) => (
        <List.Item className="list-item" key={item.title}>
          <CardItem
            title={item.title}
            description={item.description}
            tec={item.tec}
          ></CardItem>
        </List.Item>
      )}
    />
  );
};

export default ListCard;
