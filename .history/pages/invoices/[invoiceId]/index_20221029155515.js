import React from "react";

export default function index() {
  return (
    <div>
      <div className="main__container">
        <div className="back__btn">
          <h6> Go Back</h6>
        </div>

        {/* ======= invoice details header ========== */}
        <div className="invoice__details-header">
          <div className="details__status">
            <p>Status</p>

            <button>pending</button>
          </div>

          <div className="details__btns">
            <button className="edit__btn">Edit</button>
            <button className="delete__btn">Delete</button>
            <button className="mark__as-btn">Mark as Pending</button>
            <div className="invoice__details">
              <div className="details__box">
                <div>
                  <h4>{data.id.substr(0, 6).toUpperCase()}</h4>
                  <p>{data.description}</p>
                </div>
                <div>
                  <p>{data.senderAddress.street}</p>
                  <p>{data.senderAddress.city}</p>
                  <p>{data.senderAddress.postalCode}</p>
                  <p>{data.senderAddress.country}</p>
                </div>
              </div>
            </div>
            <div className="invoice__details">
              <div className="details__box">
                <div>
                  <h4>HBGFHJB3456</h4>
                  <p>Re-Branding</p>
                </div>
                <div>
                  <p>Block - B, Road - 41</p>
                  <p>Sydney</p>
                  <p>SYD 3018</p>
                  <p>Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
