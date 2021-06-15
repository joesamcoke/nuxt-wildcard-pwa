export const state = () => ({
    url: null
  })
  
  export const mutations = {
    set_subdomain(state, url) {
      state.url = url
    },
    remove_subdomain(state) {
      state.url = null
    }
  }
  export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    nuxtServerInit({ commit }, { req }) {
      const domain = req.headers.host
      const domainParts = domain.split('.')
      let subdomain
      let rootdomain
      let url
      if (domainParts.length > 2) {
        url = {
          subdomain: domainParts[0],
          rootdomain: domainParts[1] + '.' + domainParts[2]
        }
      } else {
        url = {
          subdomain: null,
          rootdomain: null
        }
      }
      commit('set_subdomain', url)
    }
}