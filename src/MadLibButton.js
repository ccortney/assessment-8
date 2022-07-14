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