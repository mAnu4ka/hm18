const post = (api,arr) =>{
    axios.post(api, arr)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default post