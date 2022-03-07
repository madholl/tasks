import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answerVisible, setAnswerVisible] = useState<boolean>(true);

    function toggleAnswerVisible(): void {
        setAnswerVisible(!answerVisible);
    }

    return (
        <div>
            <Button onClick={toggleAnswerVisible}>Reveal Answer</Button>
            {answerVisible && <div>42</div>}
        </div>
    );
}
