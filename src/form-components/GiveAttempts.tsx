import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

// export function GiveAttempts(): JSX.Element {
//     const [attempts, setAttempts] = useState<string>("3");

//     function checkAttempts(event: React.ChangeEvent<HTMLInputElement>) {
//         console.log(event.target.value);
//         if (event.target.value !== "") {
//             setAttempts(attempts);
//         }
//     }

//     function addAttempt() {
//         console.log(attempts);
//         // setAttempts(attempts + 1);
//     }

//     function useAttempt() {
//         console.log(attempts);
//         // setAttempts(attempts - 1);
//     }
//     return (
//         <div>
//             <h3>Give Attempts</h3>

//             <Form.Group controlId="giveAttempts">
//                 <Form.Label>Attempts Left: {attempts}</Form.Label>
//                 <Form.Control
//                     type="number"
//                     value={attempts}
//                     onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
//                         checkAttempts(event)
//                     }
//                 />
//                 <Form.Control
//                     type="button"
//                     value="Add Attempt"
//                     onClick={addAttempt}
//                 />
//                 <Form.Control
//                     type="button"
//                     value="Use Attempt"
//                     onClick={useAttempt}
//                     disabled={
//                         !(
//                             parseInt(attempts) > 0 ||
//                             parseInt(attempts) === undefined
//                         )
//                     }
//                 />
//             </Form.Group>
//         </div>
//     );
// }

export function GiveAttempts(): JSX.Element {
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");
    const [attemptsRemaining, setAttemptsRemaining] = useState<string>("3");

    function addAttempt() {
        const newAttemptAmount =
            parseInt(attemptsRequested) + parseInt(attemptsRemaining) || 0;
        if (
            attemptsRequested !== "" &&
            attemptsRequested !== attemptsRemaining &&
            parseInt(attemptsRequested) !== 0 &&
            newAttemptAmount !== 0
        ) {
            const attemptsToString = newAttemptAmount.toString();
            setAttemptsRemaining(attemptsToString);
        }
    }

    function useAttempt() {
        const attemptsToInt = parseInt(attemptsRemaining) - 1;
        const newAttempts = attemptsToInt.toString();
        setAttemptsRemaining(newAttempts);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="quizAttempts">
                <Form.Label>Request more attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(event.target.value)
                    }
                />
                <Button type="submit" onClick={addAttempt}>
                    Gain Attempt
                </Button>
                <Button
                    type="submit"
                    onClick={useAttempt}
                    disabled={parseInt(attemptsRemaining) === 0}
                >
                    Use Attempt
                </Button>
                <div>Attempts Left: {attemptsRemaining}</div>
            </Form.Group>
        </div>
    );
}
