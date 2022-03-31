const sordplus = (arr2) => {
    arr2.sort((data1, data2) => {
        data2 = new Date().getFullYear()
        return data1.established - data2
    });
    return arr2
}
export default sordplus