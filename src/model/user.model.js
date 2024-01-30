import randomID from "../helper/id";

class User {
    constructor({
        firstName, lastName, email, password
    })

    {
        this.id = randomID();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

export default User