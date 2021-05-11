 let recipe = {
    'title': 'Lasagna',
    'servings': 4,
    'ingredients': ['- pasta', '- sauce', '- meat', '-Mushrooms', '-Tomatoe']
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}






