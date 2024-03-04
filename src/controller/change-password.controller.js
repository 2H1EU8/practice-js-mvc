class ChangePasswordController {
    constructor(view, service) {
        this.service = service
        this.view = view
        this.changePassword()
    }
    changePassword(){
        this.view.changePassword(this.service.changePasword)
    }
}

export default ChangePasswordController