
import product from "../../../models/product"

export default async (req, res) => {
    const { pid } = req.query
    const prod = await product.findOne({ _id: pid })
    res.status(200).json(prod)

}