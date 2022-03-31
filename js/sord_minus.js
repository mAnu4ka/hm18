const sordminuse = (arr2) => {
    let arr = arr2.sort((data1, data2) => {
        obj2 = data1.date.split('.').map(str => parseInt(str))
        obj1 = data2.date.split('.').map(str => parseInt(str))

        if (obj1[1] == obj2[1])
            if (obj1[0] == obj2[0])
                return (obj2[2] - obj1[2])
        else
            return (obj1[0] - obj2[0])
        else
            return (obj1[1] - obj2[1])
    });
    return arr
}
export default sordminuse