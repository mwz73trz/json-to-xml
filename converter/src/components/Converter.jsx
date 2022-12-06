import { json2xml } from "xml-js";

const Converter = () => {
  const jsonObj = {
    cars: [
      { color: "red", maxSpeed: 120, age: 2 },
      { color: "blue", maxSpeed: 100, age: 3 },
      { color: "green", maxSpeed: 130, age: 2 },
    ],
  };

  const json = JSON.stringify(jsonObj);
  const xml = json2xml(json, { compact: true, spaces: 1 });
  console.log(xml);

  return (
    <div>
      <h1>JSON to XML</h1>
    </div>
  );
};

export default Converter;
