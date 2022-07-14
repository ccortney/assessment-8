import MadLibForm from "./MadLibForm";
import MadLibStory from "./MadLibStory";
import MadLibSelector from "./MadLibSelector";
import { useState } from "react";

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
