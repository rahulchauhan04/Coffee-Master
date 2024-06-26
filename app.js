import Store from "./services/Store.js";
import API from "./services/Api.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

//Link My web Component 
import { MenuPage } from '/components/MenuPage.js'
import { DetailsPage } from '/components/DetailsPage.js'
import { OrderPage } from '/components/OrderPage.js'

window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', async () => {
     await loadData();
     app.router.init();
});
