import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holidayA, setHolidayA] = useState<Holiday>("🎄");
    const [holidayY, setHolidayY] = useState<Holiday>("🍾");

    type Holiday = "🍾" | "🇺🇸" | "👻" | "🦃" | "🎄";

    const holidaysByYear: Record<Holiday, Holiday> = {
        "🍾": "🇺🇸",
        "🇺🇸": "👻",
        "👻": "🦃",
        "🦃": "🎄",
        "🎄": "🍾"
    };

    const holidaysAlphabetically: Record<Holiday, Holiday> = {
        "🎄": "🇺🇸",
        "🇺🇸": "👻",
        "👻": "🍾",
        "🍾": "🦃",
        "🦃": "🎄"
    };

    function nextHolidayA(): void {
        const nextHoliday = holidaysAlphabetically[holidayA];
        setHolidayA(nextHoliday);
    }

    function nextHolidayY(): void {
        const nextHoliday = holidaysByYear[holidayY];
        setHolidayY(nextHoliday);
    }

    return (
        <div>
            <span>Holiday: {holidayA}</span>
            <Button onClick={nextHolidayA}>Advance Holiday by Alphabet</Button>
            <span>Holiday: {holidayY}</span>
            <Button onClick={nextHolidayY}>Advance Holiday by Year</Button>
        </div>
    );
}
