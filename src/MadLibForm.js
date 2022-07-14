import { useState } from "react";

const MadLibForm = ({createStory}) => {
    const initialState = {
        noun1: "",
        noun2: "",
        adjective: "",
        color: ""
    }

    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.noun1.trim().length !== 0 && 
        formData.noun2.trim().length !== 0 && 
        formData.adjective.trim().length !== 0 &&
        formData.color.trim().length !== 0) {
            createStory(formData)
            setFormData(initialState);
            setError();
        }
        else {
            setError("All fields are required")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="noun"
                id="noun1"
                name="noun1"
                value={formData.noun1}
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder="noun"
                id="noun2"
                name="noun2"
                value={formData.noun2}
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder="adjective"
                id="adjective"
                name="adjective"
                value={formData.adjective}
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder="color"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <button>Create Story</button>
            {error ? (<p>{error}</p>) : null}
        </form>
    )
}

export default MadLibForm;

