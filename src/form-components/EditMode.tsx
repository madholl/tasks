import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editmode-check"
                checked={editMode}
                onChange={updateEditMode}
            />
            {!editMode ? (
                <div>
                    {name} is{" "}
                    {isStudent === true ? "a student" : "not a student"}.
                </div>
            ) : (
                <div>
                    Name:
                    <Form.Group controlId="edit-name">
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        inline
                        type="checkbox"
                        name="studentStatus"
                        onChange={() => setStudent(!isStudent)}
                        id="is-a-student"
                        label="Yes, I am a student"
                        value={isStudent.toString()}
                        checked={isStudent}
                    />
                </div>
            )}
        </div>
    );
}
