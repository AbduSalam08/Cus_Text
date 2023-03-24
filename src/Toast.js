import React from "react";

function Toast(props) {
  return (
    props.toast && (
      <div
        className={`toast toastBox align-items-center ${props.toast.view} text-bg-dark border-0`}
        id="liveToast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body ms-2" style={{ fontSize: "13px" }}>
            {props.toast.message}
          </div>
          <button
            type="button"
            className="btn-close btn-close-white me-3 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}

export default Toast;
