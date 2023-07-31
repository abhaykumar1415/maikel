let connectorMetaData = [{
    name: "Connect A",
    flag: "disabled"
  },
  {
    name: "Connect B",
    flag: "active"
  },
  {
    name: "Connect C",
    flag: "active"
  },
  {
    name: "Connect D",
    flag: "inactive"
  }];

const getConnectorMetaData = () => {
  return connectorMetaData;
}

const updateConnectorMetaData = (flag, index) => {

  console.log("in update")
  if (connectorMetaData[index].flag !== "disabled") {
    if (connectorMetaData[index].flag === "active") {
      connectorMetaData[index].flag = "inactive"
      console.log("in if")
    } else {
      console.log("in else")
      connectorMetaData[index].flag = "active"
    }
  }
  return connectorMetaData[index].flag;
}


const Data = {getConnectorMetaData, updateConnectorMetaData};

export default Data;



