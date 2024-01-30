function randomID() {
    const randomID = Array.from({ length: 1}, () => Math.floor(Math.random() * 3)).join('');
    return `${randomID}`;
}
export default randomID;