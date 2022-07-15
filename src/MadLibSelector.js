import MadLibButton from "./MadLibButton"
import {v4 as uuid} from "uuid"

/* MadLibSelector Component contains data for each story option. It
* renders a div for buttons for each story option. The information of 
* the story chosen in child MadLibButton component is passed to this 
* component and then back to parent MadLib Component and saved in state.*/
const MadLibSelector = ({chooseStory}) => {

    const stories = [
        {name: "A Love Story", 
        values: ["noun1", "noun2", "adjective", "color"],
        template: ["There was a", "adjective", "noun1", "who loved a", "color", "noun2"],
        id: uuid()}, 

        {name: "Animal Escapades", 
        values: ["name", "animal", "place", "adjective1", "adjective2"],
        template: ["My", "adjective1", "friend named", "name", "went on a trip to", "place", "with a", "adjective2", "animal"],
        id: uuid()}, 
        
        {name: "Short but Sweet", 
        values: ["singular noun", "adjective", "plural verb"],
        template: ["The", "adjective", "singular noun", "plural verb"],
        id: uuid()}, 
    ]

    return (
        <div>
            {stories.map(story => (<MadLibButton story = {story} chooseStory={chooseStory} key={story.id}/>))}
        </div>
    )
}

export default MadLibSelector
