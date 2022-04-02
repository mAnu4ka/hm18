const post = (api,arr) =>{
    axios.post(api, arr)
    .then(function (response) {
        return response
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default post