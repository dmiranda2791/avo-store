type TProductId = string
type Url = string
type TProductAttributes = {
    description: string
    shape: string
    hardiness: string
    taste: string
}
type TProduct = {
    id: TProductId
    name: string
    sku: string
    price: number
    image: Url
    attributes: TProductAttributes
}