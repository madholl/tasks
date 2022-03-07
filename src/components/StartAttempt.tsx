import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    type QuestionType = "multiple_choice_question" | "short_answer_question";
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function startQuiz(): void {
        setAttempts(attempts - 1);
        setQuizInProgress(true);
    }

    function stopQuiz(): void {
        setQuizInProgress(false);
    }

    function mulliganQuiz(): void {
        setAttempts(1 + attempts);
    }
    return (
        <div>
            <span>Attempts Left: {attempts}</span>
            <Button
                onClick={() => startQuiz()}
                disabled={attempts <= 0 || quizInProgress}
            >
                Start Quiz
            </Button>
            <Button onClick={() => stopQuiz()} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={() => mulliganQuiz()} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}