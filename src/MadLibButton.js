
/* MadLibButton Component renders a single button with the story title.
* When clicked, the story infomation is sent to the parent MadLibSelector Component
* and then back to that component's parent the MadLib Component and stored in state. */
const MadLibButton = ({story, chooseStory}) => {
    return (
        <button
            onClick = {() => chooseStory(story)}
        >
        {story.name}
        </button>
    )
}

export default MadLibButton;