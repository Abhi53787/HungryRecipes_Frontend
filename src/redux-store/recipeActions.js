export const SET_RECIPES = "SET_RECIPES";
export const SEARCH_RECIPES = "SEARCH_RECIPES";

export const setRecipes = (recipes) => ({
    type: SET_RECIPES,
    payload: recipes,
});

export const searchRecipes = (category) => ({
    type: SEARCH_RECIPES,
    payload: category,
});
