import axios from 'axios'
export const favorite = {

    namespaced: true,
    state: { favoriteList:null},
    mutations: {
      setFavorite(state, param){
        state.favorite = param.favorite
      }
    },
    actions: {
      async saveFavorite(_,{ data }){
        const param = {meigen : data}
        try {
          const response = await axios.post('http://localhost:3000/save',param)
          return response
        } catch (e){
          console.log(e)
        }
      }
    },
    getters: {
        favoriteList: (state) => state.favoriteList
    }

}