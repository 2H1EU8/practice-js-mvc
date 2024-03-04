class LoginController {
    constructor(view, service) {
        this.view = view
        this.service = service
        this.login()
    }

    login() {
        this.view.login(this.service.getUser)
    }
}

export default LoginController