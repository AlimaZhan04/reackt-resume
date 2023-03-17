import React from "react";

const Contacts = () => {
  return (
    <div className="d-flex justify-content-around my-5">
      <div>
        <div
          style={{
            backgroundColor: "pink",
            width: "220px",
            height: "300px",
            borderRadius: "18px",
          }}
        >
          <img
            width={160}
            className="contact-img"
            style={{ marginLeft: "11%" }}
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"
            alt=""
          />
          <h4>Instagram</h4>
          <a href="hgj">alim_zhan</a>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "pink",
            width: "220px",
            height: "300px",
            borderRadius: "18px",
          }}
        >
          <img
            width={300}
            style={{ marginLeft: "-35px" }}
            className="contact-img"
            src="https://1000logos.net/wp-content/uploads/2021/04/Telegram-logo.png"
            alt=""
          />
          <h4>Telegramm</h4>
          <a href="bjk">alima</a>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "pink",
            width: "220px",
            height: "300px",
            borderRadius: "18px",
          }}
        >
          <img
            width={180}
            style={{ marginLeft: "11%" }}
            className="contact-img"
            src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png"
            alt=""
          />
          <h4>gitHub</h4>
          <a href="https://github.com/AlimaZhan04">AlimaZhan04</a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
