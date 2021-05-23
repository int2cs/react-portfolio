import React from "react";

const CardHeader = () => {
  return (
    <header className="main-header">
      <img src="./img/avatar.jpg" alt="avatar" className="main-avatar" />
      <h2 className="main-title">Gabriel Gobin</h2>
      <p className="main-date">il y a 10 minutes</p>
    </header>
  );
};

export default CardHeader;
