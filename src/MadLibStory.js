
const MadLibStory = ({data, clearStory}) => {
    const story = `There was a ${data.color} ${data.noun1} who loved a ${data.adjective} ${data.noun2}!`

    return (
        <div>
            <h2>{story}</h2>
            <button onClick={clearStory}>Reset</button>
        </div>
    )
}

export default MadLibStory;