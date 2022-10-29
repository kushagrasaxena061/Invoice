import React from "react";

export default function index() {
  return (
    <div>
      <div className="main__container">
        <div className="back__btn">
          <h6 > Go Back</h6>
        </div>

        {/* ======= invoice details header ========== */}
        <div className="invoice__details-header">
          <div className="details__status">
            <p>Status</p>

            <button>pending</button>
          </div>

          <div className="details__btns">
            <button
              className="edit__btn"
           
            >
              Edit
            </button>
            <button
              className="delete__btn"
           
            >
              Delete
            </button>
            <button
              className="mark__as-btn"
           
            >
              Mark as Pending
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
