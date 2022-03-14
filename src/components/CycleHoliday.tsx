import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    // const [holidayA, setHolidayA] = useState<Holiday>("🎄");
    // const [holidayY, setHolidayY] = useState<Holiday>("🍾");
    const [holiday, setHoliday] = useState<Holiday>("🎄");

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

    function nextHolidayA(holiday: Holiday): void {
        const nextHoliday = holidaysAlphabetically[holiday];
        setHoliday(nextHoliday);
    }

    function nextHolidayY(holiday: Holiday): void {
        const nextHoliday = holidaysByYear[holiday];
        setHoliday(nextHoliday);
    }

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={() => nextHolidayA(holiday)}>
                Advance Holiday by Alphabet
            </Button>
            <Button onClick={() => nextHolidayY(holiday)}>
                Advance Holiday by Year
            </Button>
        </div>
    );
}
