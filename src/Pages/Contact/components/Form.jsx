import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Form.css'
import { IoIosSend } from "react-icons/io";
import 'animate.css';

function Form() {
    const [state, handleSubmit] = useForm("xbjnwyod");
    if (state.succeeded) {
        return <p class='animate__animated animate__bounce message'>Thanks for Contacting us! 👍</p>;
    }

    return (
        <div>

            <form className='formbody' onSubmit={handleSubmit}>
                <h3 className='formh3'>
                    Send Us a Messsage
                </h3>
                <label className='formlabel' htmlFor="name">
                    Name
                </label>
                <input
                    className='forminput d-block'
                    id='name'
                    type="text"
                    name='name'
                    required
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <label className='formlabel' htmlFor="email">
                    Email Address
                </label>
                <input
                    className='forminput d-block'
                    id="email"
                    type="email"
                    name="email"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label className='formlabel' htmlFor="name">
                    Phone
                </label>
                <input
                    className='forminput d-block'
                    id='number'
                    type="number"
                    name='number'
                    required
                />
                <ValidationError
                    prefix="Number"
                    field="number"
                    errors={state.errors}
                />
                <label className='formlabel' htmlFor="message">
                    Message
                </label>
                <textarea
                    rows="5"
                    className='forminput d-block'
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button className='formbtn' type="submit" disabled={state.submitting}>
                    <span className='formspan'>Send</span> <IoIosSend />
                </button>
            </form>
        </div>
    );
}
export default Form