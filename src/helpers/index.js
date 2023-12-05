export const priceProperty = (price) => 
    Number(price).toLocaleString('es-US', {
        style: 'currency',
        currency: 'USD'
})