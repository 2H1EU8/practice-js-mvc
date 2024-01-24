function generateID() {
    const randomDigits = Array.from({ length: 5 }, () => Math.floor(Math.random() * 5)).join('');
    return `#${randomDigits}`;
}
export default generateID;