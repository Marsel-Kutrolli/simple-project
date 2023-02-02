import React from "react";

import Card from "./Card";
import Text from "./Text";

function CardContainer({ cardName, cardValue }) {
  return (
    <div className="twoContainers">
      <div className="nameCard">
        <Card>
          <Text>{cardName}</Text>
        </Card>
      </div>
      <div className="valueCard">
        <Card>
          <Text>{cardValue}</Text>
        </Card>
      </div>
    </div>
  );
}

export default CardContainer;
