class Router {
    constructor() {
        this.routes = [];
        this.currentRoute = null;
    }

    // Define a new route with a regular expression pattern
    define(path, element) {
        this.routes.push({path, element})
    }

    // Listen for changes in the URL
    listen() {
        const path = window.location.pathname
        const element = this.routes.find(route => route.path === path).element

        const root = document.getElementById('root')

        if (typeof element === 'string') {
            root.innerHTML = element
        }
        else {
            root.appendChild(element)
        }
    }
}

export default Router