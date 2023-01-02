
import initDB from "../../helpers/initDB";
import product from "../../models/product";

initDB()

export default (req, res) => {
  product.find().then(products => {
    res.status(200).json(products)
  }).catch(e => {
    console.log(e)
  })

}


