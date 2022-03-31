
const send_arr = (how_many, min, max) => {
    const urls = []
    for (let i = 0; i < how_many; i++) {
        urls.push(getUrl(min, max))
    }

    const requests = urls.map((url) => axios.get(url))

    return Promise.all(requests)
        .then(responses => responses.map(resp => resp.data))
        .catch(e => console.error(e))
}

function getUrl(min, max) {
    const base = 'https://api.instantwebtools.net/v1/airlines/'
    const number = Math.floor(min + Math.random() * (max + 1 - min))
    return base + number
}

export default send_arr