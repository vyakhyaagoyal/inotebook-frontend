import React from "react";

const Toast = ({ show, onClose, title, message, type = "success" }) => {
    if (!show) return null;

    return (
        <div
            className="toast show position-fixed top-50 start-50 translate-middle text-black"
            role="alert"
            style={{ zIndex: 9999, minWidth: "250px" }}
        >
            <div className="toast-header">
                <i className={`fa-solid fa-circle-check text-${type} me-2`}></i>
                <span className={`badge bg-${type} me-2`}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                <strong className="me-auto">{title}</strong>
                <small>Just now</small>
                <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="toast-body">{message}</div>
        </div>
    );
};

export default Toast;
