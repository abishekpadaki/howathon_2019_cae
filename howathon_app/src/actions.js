// import formatString from 'src/utilities/formatString';

export const setLists = (store, lists) => {
    const { boxes, locations } = lists
    console.log(boxes, locations)
    store.setState({
        boxes: boxes ? boxes : store.state.boxes,
        locations: locations ? locations : store.state.locations
    });
};

export const setTableQueries = (store, values) => {
    const { date, time, boxes, box, location } = values
    store.setState({
        tableQuery: {
            date,
            time,
            boxes,
            box,
            location
        }
    })
} 