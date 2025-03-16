import React from "react";
import "../compounts/Market.css";

function Market() {
  return (
    <div className="container">
      <div className="container-left">
        <img
          src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/indianMarketBuilding.a399b6f2.webp"
          alt=""
          width={140}
        />
        <p className="para-1">Indian markets at</p>
        <p className="para-1">your fingertips.</p>
        <p className="para-2">
          Long-term or short-term, high risk or low risk. Be the kind of
          investor you want to be.
        </p>
        <div className="stock">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stocksHistogram.1c5dd346.webp"
            alt=""
          />
          <p>Stocks & Intraday</p>
          <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="Mutual">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/mutualFundBlocks.ee53101c.webp"
            alt=""
          />
          <p>Mutual funds & SIPs</p>
        </div>
        <div className="futures">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/fnoClock.0c7a0775.webp"
            alt=""
          />
          <p>Futures & Options</p>
        </div>
      </div>
      <div className="container-right">
        <img
          src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stocksBuy.5382418f.webp"
          alt=""
          width={300}
        />
      </div>
    </div>
  );
}

export default Market;
