import menu from './menu'

export default {
  havingBurger: false,
  burger: {
    bun: menu.buns[0],
    patty: menu.patties[0],
    cheese: menu.cheeses[0],
    condiments: [ ...menu.condiments ]
  },
  havingFries: false,
  havingDrink: false,
  drink: menu.drinks[0]
}
