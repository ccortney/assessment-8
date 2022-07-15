import { render, fireEvent } from '@testing-library/react';
import MadLib from './MadLib';

// smoke test
test('renders without crashing', () => {
  render(<MadLib />);
});

// snapshop test
test ('matches snapshot', () => {
  const {asFragment} = render(<MadLib/>);
  expect(asFragment()).toMatchSnapshot();
})

// more tests
test ('initial rendering of page', () => {
    const madLib = render(<MadLib/>);

    // story selector buttons should be on page
    expect(madLib.queryByText("Short but Sweet")).toBeInTheDocument();

    // form and story should not be on page
    expect(madLib.queryByText("Create Story")).not.toBeInTheDocument();
    expect(madLib.queryByText("Reset")).not.toBeInTheDocument();
})

test ('if form renders when story is selected', () => {
    const madLib = render(<MadLib/>);

    // story is selected
    const storyButton = madLib.queryByText("Short but Sweet");
    fireEvent.click(storyButton)

    // buttons should not be rendered
    expect(madLib.queryByText("Short but Sweet")).not.toBeInTheDocument();

    // the form should be rendered
    expect(madLib.queryByText("Create Story")).toBeInTheDocument();
})

test ('if story renders when form is submitted', () => {
    const madLib = render(<MadLib/>);

    // story is selected and form is rendered
    const storyButton = madLib.queryByText("Short but Sweet");
    fireEvent.click(storyButton)

    // form is filled out
    const nounInput = madLib.getByPlaceholderText("singular noun");
    fireEvent.change(nounInput, {target: {value: "pencil"}})
    const adjectiveInput = madLib.getByPlaceholderText("adjective");
    fireEvent.change(adjectiveInput, {target: {value: "fuzzy"}})
    const verbInput = madLib.getByPlaceholderText("plural verb");
    fireEvent.change(verbInput, {target: {value: "sings"}})

    // form is submitted
    const submitButton = madLib.queryByText("Create Story");
    fireEvent.click(submitButton)

    // story is rendered
    expect(madLib.queryByText("The fuzzy pencil sings!")).toBeInTheDocument();

    // form should no longer be displayed
    expect(madLib.queryByText("Create Story")).not.toBeInTheDocument();
})

test ('if reset button resets the page', () => {
    const madLib = render(<MadLib/>);

    // story is selected and form is rendered
    const storyButton = madLib.queryByText("Short but Sweet");
    fireEvent.click(storyButton)

    // form is filled out
    const nounInput = madLib.getByPlaceholderText("singular noun");
    fireEvent.change(nounInput, {target: {value: "pencil"}})
    const adjectiveInput = madLib.getByPlaceholderText("adjective");
    fireEvent.change(adjectiveInput, {target: {value: "fuzzy"}})
    const verbInput = madLib.getByPlaceholderText("plural verb");
    fireEvent.change(verbInput, {target: {value: "sings"}})

    // form is submitted
    const submitButton = madLib.queryByText("Create Story");
    fireEvent.click(submitButton)

    // story is rendered
    expect(madLib.queryByText("The fuzzy pencil sings!")).toBeInTheDocument();

    // reset button is clicked
    const resetButton = madLib.queryByText("Reset");
    fireEvent.click(resetButton)

    // story should not be rendered
    expect(madLib.queryByText("The fuzzy pencil sings!")).not.toBeInTheDocument();

    // story selector buttons should be rendered
    expect(madLib.queryByText("Short but Sweet")).toBeInTheDocument();
})