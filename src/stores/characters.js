import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('characters', {
  state: () => {
    return { characters: {} }
  },
  actions: {
    setCharactersList(data) {
      try {
        this.characters = {
          results: data.results,
        }
      } catch(error) {
        console.error("Unable to set characters list: "+error)
      }
    },
  },
  getters: {
    getCharacters() {
      return this.characters.results
    },
  }
})