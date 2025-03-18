import { createStore } from "redux";
import recipeReducer from "./recipeReducer";

const store = createStore(recipeReducer);

export default store;
