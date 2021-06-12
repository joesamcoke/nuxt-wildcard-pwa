export const state = () => ({
    subdomain: null,
    domain: null
  })
  
  export const mutations = {
    set_subdomain(state, subdomain, domain) {
      state.subdomain = subdomain
      state.domain = domain
    },
    remove_subdomain(state) {
      state.subdomain = null
      state.domain = null
    }
  }
  export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    nuxtServerInit({ commit }, { req }) {
      const domain = req.headers.host
      const domainParts = domain.split('.')
      let subdomain
      let rootdomain
      if (domainParts.length > 2) {
        subdomain = domainParts[0]
        rootdomain = domainParts[1] + domainParts[2]
      } else {
        subdomain = null
        rootdomain = null
      }
      commit('set_subdomain', subdomain, rootdomain)
    }
}