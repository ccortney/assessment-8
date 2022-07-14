import MadLibForm from "./MadLibForm";
import MadLibStory from "./MadLibStory";
import { useState } from "react";

const MadLib = () => {
    const [storyData, setStoryData] = useState();
    const [showForm, setShowForm] = useState(true);
    const [showStory, setShowStory] = useState(false)

    const createStory = (newStory) => {
        setStoryData(newStory)
        setShowForm(false)
        setShowStory(true)
    }

    const clearStory = () => {
        setStoryData();
        setShowForm(true)
        setShowStory(false)
    }

    return (
        <div>
            <h1>Madlibs!</h1>
            {showForm ? (<MadLibForm createStory = {createStory} />) : null}
            {showStory ? (<MadLibStory data={storyData} clearStory={clearStory} />) : null}

        </div>

    )
}

export default MadLib;
