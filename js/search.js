const searchs = (arr, el, name) => {
    let patients = arr
    let inputs = el.value.toLowerCase().trim();
    let re = new RegExp(inputs + '.+$', 'i');
    patients = patients.filter(function (e, i, a) {
        let names = name
        if (names == 'established') e = e.established.toLowerCase().trim()
        else e = e.name.toLowerCase().trim()
        return e.search(re) != -1;
    });
    return patients
}

export default searchs