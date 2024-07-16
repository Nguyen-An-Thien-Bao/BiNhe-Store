const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

function formatCurrency(number = Number) {
    return VND.format(number);
}

export default formatCurrency;
