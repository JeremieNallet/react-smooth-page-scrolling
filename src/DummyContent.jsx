import React from "react";
import { range } from "lodash";

const DummyContent = ({ content }) => (
    <>
        {range(content).map((_, i) => (
            <div key={i} className="dummy-content">
                <span>SCROLL DOWN</span>
                <span className="arrow-down">&#8595;</span>
            </div>
        ))}
    </>
);

export default DummyContent;
