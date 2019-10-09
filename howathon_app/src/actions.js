// import formatString from 'src/utilities/formatString';

export const setLists = (store, lists) => {
    const { boxes, locations } = store
    store.setState({
        boxes: boxes ? boxes : store.state.boxes,
        locations: locations ? locations : store.state.locations
    });
};
