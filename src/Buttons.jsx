import React from "react";

const Buttons = ({ addContent, deleteContent }) => {
    return (
        <div className="btn-group">
            <button className="btn" onClick={addContent}>
                + add content
            </button>
            <button className="btn" onClick={deleteContent}>
                - delete content
            </button>
        </div>
    );
};

export default Buttons;
