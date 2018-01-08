$(document).ready( function(){
  /*
  * Escondiendo ícono de flecha
  */
  $('.js-back').hide();

  /*
  * Llamando función printNews
  */
  printNews();

  /*
  * La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
  */
	renderHighlightedRecipes(recipesArray);

});

/*
* Asignando el texto "Nuevas Recetas"
*/
function printNews() {
   $('.callout-news').find('p').text('NUEVAS RECETAS');
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
  console.log('Recipes: ', recipesArray);
  /*
  *Recorrer variable recipesArray buscando Highlighted true
  */
  for (var i = 0; i < recipesArray.length; i++) {
    if(recipesArray[i].highlighted) {
    renderRecipe(recipesArray[i]);
    }
  }
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
  var container = $('.list-recipes');


  container.append(
    '<a class="item-recipe" href="#">' +
    '<span class="attribution">' +
    '<span class="title-recipe">' + recipe.title + '</span>' +
    '<span class="metadata-recipe">' + 
    '<span class="author-recipe">' + recipe.source.name + '</span>' +
    '<span class="bookmarks-recipe">' +
    '<span class="icon-bookmark"></span>' + 
    '</span>' +
    '</span>' +
    '</span>' +
    '<img src="assets/img/recipes/640x480/' + recipe.name + '.jpg" />' +
    '</a>');
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


