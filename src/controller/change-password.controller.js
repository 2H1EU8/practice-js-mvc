class ChangePasswordController {
    constructor(view, service) {
        this.view = view
        this.service = service
        this.changePassword()
    }
    changePassword(){
        this.view.changePassword(this.service.changePassword)
    }
}

export default ChangePasswordController