import { useState } from "react";

/* MadLibForm Component renders form for user input of prompts for the given story. 
* Submission sends user input to parent MadLib Component. Parent MadLib Component 
* sends user input to MadLibStory Component to construct the story and re-renders to
* display the story. */
const MadLibForm = ({createStory, inputs}) => {
    const initialState = inputs.reduce((acc, val) => {
        return {...acc, [val]: ""};
    }, {});

    const [formData, setFormData] = useState(initialState);

    const createFormInputs = (input) => {
        return (
            <input 
            key = {input}
            type="text" 
            placeholder={input}
            id={input}
            name={input}
            value={formData.input}
            onChange={handleChange}
            required
        />
        )
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createStory(formData);
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            {inputs.map(input => createFormInputs(input))}
            <button type="submit">Create Story</button>
        </form>
    )
}

export default MadLibForm;

