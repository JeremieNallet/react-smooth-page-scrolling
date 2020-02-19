import React, { useState } from "react";
import ReactDOM from "react-dom";
import DummyContent from "./DummyContent";
import ScrollContainer from "./ScrollContainer";
import Buttons from "./Buttons";
import "./index.css";

const App = () => {
    const [content, set] = useState(2);
    const scrollIntertia = 50;

    return (
        <>
            <Buttons
                addContent={() => set(content + 1)}
                deleteContent={() => set(content < 1 ? content - 1 : 1)}
            />
            <ScrollContainer scrollIntertia={scrollIntertia}>
                <DummyContent content={content} />
            </ScrollContainer>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
