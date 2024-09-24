function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
}

function generateRandom4DigitsNumber() {
    return `CtsGift_${Math.floor(1000 + Math.random() * 9000)}`;
}

function generateUser() {
    const userId = uuidv4();
    const userName = generateRandom4DigitsNumber();

    return { userId, userName, subscription: "" };
}

function generateUserNameAndUserId(count) {
    let users = [];
    for (let i = 0; i < count; i++) {
        let user = generateUser();
        while (users.includes(user)) {
            user = generateUser();
        }
        users.push(user);
    }
    return users;
}

export { generateUserNameAndUserId }