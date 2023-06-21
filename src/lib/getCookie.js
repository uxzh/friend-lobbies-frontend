function getCookie(key){
    const cookiestring = decodeURIComponent(document.cookie)
    const cookies = cookiestring.split("; ")
    for(const cookie of cookies){
        const cookieKey = cookie.split("=")
        if (cookieKey[0] === key){
            return cookieKey[1]
        }
    }
    return null
}

export default getCookie