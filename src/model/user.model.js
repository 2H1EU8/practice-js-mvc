import randomID from "../helper/id";

class User {
    constructor({
        firstName, lastName, email, password, notifications = []
    })

    {
        this.id = randomID();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.notifications = notifications;
    }
}

export default User