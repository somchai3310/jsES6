// Default Parameter
getDataCustomer= (customerName,customerAddress='BKK') => {
    // if (!customerAddress) {
    //     customerAddress = 'BKK'
    // }
    const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ : ${customerAddress}`
    return address
}

console.log(getDataCustomer('somchai','BKK'));
console.log(getDataCustomer('somsri','CEI'));

console.log(getDataCustomer('hahaha'));