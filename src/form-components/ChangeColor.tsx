import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "peachpuff",
        "darkorange",
        "lightcoral",
        "crimson",
        "palegreen",
        "seagreen",
        "cornflowerblue",
        "skyblue"
    ];
    const DEFAULT_COLOR = COLORS[0];
    const [colorSelected, setColorSelected] = useState<string>(DEFAULT_COLOR);

    function updateColorSelected(event: React.ChangeEvent<HTMLInputElement>) {
        setColorSelected(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Label>What is your favorite color?</Form.Label>
            <Form.Group controlId="favoriteColors">
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={COLORS.indexOf(color)}
                        inline
                        type="radio"
                        name="color-radio"
                        onChange={updateColorSelected}
                        id="color-box"
                        label={color}
                        style={{ backgroundColor: color }}
                        value={color}
                        checked={colorSelected === color}
                    ></Form.Check>
                ))}
            </Form.Group>
            <div>
                You have chosen
                <text
                    data-testid="colored-box"
                    style={{ backgroundColor: colorSelected }}
                >
                    {colorSelected}
                </text>
            </div>
        </div>
    );
}
