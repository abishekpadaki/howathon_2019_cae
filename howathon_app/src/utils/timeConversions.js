const epochToTime = (time) => {
    const d = new Date(0);
    d.setUTCMilliseconds(parseInt(time, 10));
    const date = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    console.log(date, d)
    return date;
}

export { epochToTime }