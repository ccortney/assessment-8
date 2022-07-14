
const MadLibStory = ({data, clearStory, story}) => {

    const storyTemplate = story.map((word) => {
        if (word in data) {
            return data[word];
        }
        else return word
    })

    const writeStory = storyTemplate.join(" ") + "!"

    return (
        <div>
            <h2>{writeStory}</h2>
            <button onClick={clearStory}>Reset</button>
        </div>
    )
}

export default MadLibStory;