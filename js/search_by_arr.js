const searchs = (arr, el) => {
    let patients = arr
    let inputs = el.value.toLowerCase().trim();
    let re = new RegExp(inputs + '.+$', 'i');
    patients = patients.filter(function (e, i, a) {
        e = e.established
        console.log(e);
        return e.search(re) != -1;
    });
    return patients
}
export default searchs