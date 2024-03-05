class RegisterController {
    constructor(view, service) {
        this.view = view
        this.service = service

        this.register()
    }

    register() {
        this.view.register(this.service.addUser)
    }
}

export default RegisterController