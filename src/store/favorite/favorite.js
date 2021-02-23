import axios from 'axios'
export const favorite = {

    namespaced: true,
    state: { favoriteList:null},
    mutations: {
      setFavorite(state, param){
        state.favoriteList = param
      }
    },
    actions: {
      async saveFavorite(_,{ data }){
        const param = {meigen : data}
        try {
          await axios.post('http://localhost:3000/meigenAction/save',param)
          return Promise.resolve('Success')
        } catch (error){
          console.log(error)
          return Promise.reject(error)
        }
      },
      async getFavoritesList(){
        try {
          return await axios.get('http://localhost:3000/meigenAction/get')
        } catch (e){
          console.log(e)
        }
      }
    },
    getters: {
        favoriteList: (state) => state.favoriteList
    }

}