import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('characters', {
  state: () => {
    return { 
      characters: {}, 
      favourite: JSON.parse(localStorage.getItem("favourites")) || [],
      favouriteAmount: JSON.parse(localStorage.getItem("favourites")).length || 0,
    }
  },
  actions: {
    setCharactersList(data) {
      try {
        this.characters = {
          results: data.results ? data.results : data,
        }
      } catch(error) {
        console.error("Unable to set characters list: "+error)
      }
    },
    updateFavourite() {
      try {
        this.favourite = JSON.parse(localStorage.getItem("favourites"))
        this.favouriteAmount = JSON.parse(localStorage.getItem("favourites")) 
        ? JSON.parse(localStorage.getItem("favourites")).length 
        : 0
      } catch(error) {
        console.error("Error while updateing favourite: "+error)
      }
    },
    checkIsFavourite(data) {
      const existingCharacterIndex = this.favourite.findIndex(item => item.name === data)
      if (existingCharacterIndex !== -1) {
        return false
      } else {
        return true
      }
    },
  },
  getters: {
    getCharacters() {
      return this.characters.results
    },
    getFavourite() {
      return this.favourite
    },
    getFavouriteAmount() {
      return this.favouriteAmount;
    }
  }
})