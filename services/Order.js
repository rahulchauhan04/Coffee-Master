import { getProductById } from "./Menu.js";

export async function addToCart(id) {
     const product = await getProductById(id);
     const results = app.store.cart.filter(
          prodInCart => prodInCart.product.id === id);
     if (results.length==1) {
          //the product is already in the cart 
          //update the cart 
          app.store.cart = app.store.cart.map(
               p => p.procuct.id == id 
                    ? {...p, quantity: p.quantity + 1}
                    :p
          );   
     } else {
          app.store.cart = ap.store.cart.filter(p => p.product.id != id);
     }
}
