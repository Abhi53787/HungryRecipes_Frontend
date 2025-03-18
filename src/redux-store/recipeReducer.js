import { SET_RECIPES, SEARCH_RECIPES } from "./recipeActions";

const initialState = {
    recipes: [],
    filteredRecipes: [],
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                filteredRecipes: action.payload, // Initially, all recipes are shown
            };
        case SEARCH_RECIPES:
            return {
                ...state,
                filteredRecipes: state.recipes.filter((recipe) =>
                    recipe.category.toLowerCase().includes(action.payload.toLowerCase())
                ),
            };
        default:
            return state;
    }
};

export default recipeReducer;
