const Header = () => {
    const storedUser = localStorage.getItem('users');
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (user) {
        // User is logged in
        const userName = `${user.firstName} ${user.lastName}`;

        return `
            <header id="header-container" class="header">
                <img src="/search.171c0435.svg" alt="" />
                <figure class="noti-btn">
                    <img src="/notifications.8b2852f2.svg" alt="" />
                    <figcaption class="noti-list">
                    </figcaption>
                </figure>
                <select class="header__select">
                    <option value="">${userName}</option>
                    <option value="logout">Log Out</option>
                    <option value="changePassword">Change Password</option>
                </select>
            </header>
        `;
    } else {
        // User is not logged in
        return `
            <header id="header-container" class="header">
                <img src="/search.171c0435.svg" alt="" />
                <img src="/notifications.8b2852f2.svg" alt="" />
                
                <button class="header__button">
                    <a href="/login">Log in </a>
                </button>
            </header>
        `;
    }
};

export default Header;
