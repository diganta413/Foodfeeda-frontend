import cookie from "js-cookie";
import jwt from "jwt-decode";

// Set in Cookie
export const setCookie = (key, value) => {
    if (window !== "undefiend") {
        cookie.set(key, value, {
            // 1 Day
            expires: 1,
        });
    }
};
// remove from cookie
export const removeCookie = (key) => {
    if (window !== "undefined") {
        cookie.remove(key, {
            expires: 1,
        });
    }
};

// Get from cookie such as stored token
// Will be useful when we need to make request to server with token
export const getCookie = (key) => {
    if (window !== "undefined") {
        return cookie.get(key);
    }
};

// Set in localstorage
export const setLocalStorage = (key, value) => {
    if (window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// Remove from localstorage
export const removeLocalStorage = (key) => {
    if (window !== "undefined") {
        localStorage.removeItem(key);
    }
};

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response) => {
    setCookie("access_token", response.access);
    setCookie("refresh_token", response.refresh);
    var decoded = jwt(response.access);
    console.log(decoded);
    //localStorage.setItem("userId",decoded.user_id.toString())
};

// Access user info from localstorage
export const getAuth = () => {
    if (window !== "undefined") {
        const cookieChecked = getCookie("access_token");
        if (cookieChecked) {
            if (localStorage.getItem("userId")) {
                return localStorage.getItem("userId");
            } else {
                return false;
            }
        }
    }
};

export const getUserId = () => {
    const access = getCookie("access_token");
    if (access) {
        var decoded = jwt(access);
        console.log(decoded);
        return decoded.user_id;
    }
};

export const signout = () => {
    removeCookie("access_token");
    removeCookie("refresh_token");
    //removeLocalStorage("userId");
    //window.location.reload()
};

export const updateUser = (response, next) => {
    if (typeof window !== "undefined") {
        let auth = JSON.parse(localStorage.getItem("user"));
        auth = response.data;
        localStorage.setItem("user", JSON.stringify(auth));
    }
    next();
};
