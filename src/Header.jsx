import React from "react";

const style = {
  backgroundColor: "#999999",
  width: "400px",
  padding: "8px",
  margin: "8px",
  borderRadius: "4px"
};

const pstyleL = {
  display: "inline",
  textAlign: "left",
  padding: "0 10px"
};
const pstyleR = {
  display: "inline",
  textAlign: "right",
  padding: "0 10px",
  marginLeft: "290px"
};

export const Header = () => {
  return (
    <>
      <header>
        <div style={style}>
          <p aline="left" style={pstyleL}>
            title
          </p>
          <p align="right" style={pstyleR}>
            text
          </p>
        </div>
      </header>
    </>
  );
};
