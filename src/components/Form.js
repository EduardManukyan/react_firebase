import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/AlertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
    const [value, setValue] = useState("")
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)
    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show("Note has been created", "success")
            }).catch(() => {
                alert.show("Note not created", "danger")
            })
            setValue("")

        } else {
            alert.show("Enter note title")
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-grup">
                <input
                    type='text'
                    className="form-control"
                    placeholder="Enter note title"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}