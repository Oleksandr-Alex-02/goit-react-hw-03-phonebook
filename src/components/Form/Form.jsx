import React, { useState } from 'react'
import PropTypes from 'prop-types'

import css from './Form.module.css'

export default function Form() {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleInputChange = e => {
        const { name, value } = e.target

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    }

    const locaStorage = (contacts) => {
        localStorage.setItem(name, number)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setName('')
        setNumber('')
        locaStorage()
    }

    return (
        <div className={css.blok__form}>
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>
                    Name
                    <input
                        className={css.input}
                        onChange={handleInputChange}
                        name="name"
                        value={name}
                        type="text"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    Number
                    <input
                        className={css.input}
                        onChange={handleInputChange}
                        name="number"
                        value={number}
                        type="tel"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit">App contacts</button>
            </form>
        </div>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}