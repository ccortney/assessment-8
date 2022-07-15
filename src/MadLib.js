import MadLibForm from "./MadLibForm";
import MadLibStory from "./MadLibStory";
import MadLibSelector from "./MadLibSelector";
import { useState } from "react";

/* Main component. MadLib Component starts by rendering buttons to choose mad lib story.
* When a story is chosen and the story information is saved in state, that information
* is sent to MadLibForm Component and the form is shown to users. When the form is 
* submitted, the user input is sent to MadLibStory Component and the story is constructed
* and displayed. */
const MadLib = () => {
    const [storyInfo, setStoryInfo] = useState();
    const [storyUserData, setStoryUserData] = useState();
    const [showStoryOptions, setShowStoryOptions] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showStory, setShowStory] = useState(false);
    
    const chooseStory = (story) => {
        setStoryInfo(story);
        setShowForm(true);
        setShowStoryOptions(false);
    }

    const createStory = (formData) => {
        setStoryUserData(formData)
        setShowForm(false)
        setShowStory(true)
    }

    const clearStory = () => {
        setStoryUserData();
        setShowStory(false)
        setShowStoryOptions(true);
    }

    return (
        <div>
            <h1>Madlibs!</h1>
            {showStoryOptions ? (<MadLibSelector chooseStory = {chooseStory}/>) : null}
            {showForm ? (<MadLibForm createStory = {createStory} inputs={storyInfo.values}/>) : null}
            {showStory ? (<MadLibStory story={storyInfo.template} data={storyUserData} clearStory={clearStory} />) : null}

        </div>

    )
}

export default MadLib;
