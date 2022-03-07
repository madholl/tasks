import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeft] = useState<number>(3);
    const [rightDie, setRight] = useState<number>(6);
    const snakeEyes = isSnakeEyes();
    const equal = areEqual();

    function isSnakeEyes(): boolean {
        return leftDie === 1 && rightDie === 1;
    }

    function areEqual(): boolean {
        return leftDie === rightDie;
    }

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={() => setLeft(d6)}>Roll Left</Button>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={() => setRight(d6)}>Roll Right</Button>
            <div>{snakeEyes ? <span>You Lose!</span> : <span></span>}</div>
            <div>
                {equal && !snakeEyes ? <span>You Win!</span> : <span></span>}
            </div>
        </div>
    );
}
