<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon> Poop
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer   
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {



  // let image = data.brand.logo
  // let splitted = image.split('upload/')
  // splitted[0] = splitted[0] + "upload/w_256,h_256/"
  // let resized = splitted.join('')

  // let link = document.createElement('link');
  // link.rel = 'manifest';

//   let myDynamicManifest = {
//     "name": data.brand.name,
//     "short_name": data.brand.name,
//     "description": data.brand.name,
//     "start_url": `https://${ data.brand.domain }`,
//     "display": "standalone",
//     "background_color": "#F0F0F0",
//     "theme_color": "#555555",
//     "icons": [{
//       "src": resized,
//       "sizes": "256x256",
//       "type": "image/png"
//     }]
//   }

//   const stringManifest = JSON.stringify(myDynamicManifest);

//   const blob = new Blob([stringManifest], {type: 'application/json'});
//   // const manifestURL = URL.createObjectURL(blob);
//   let reader = new FileReader();
//   reader.readAsDataURL(blob);
//   reader.onload = function(){
//       link.href = reader.result
//       document.getElementsByTagName('head')[0].appendChild(link);
//       // document.getElementById('my-manifest-placeholder').setAttribute('href', reader.result);
//   }



// } catch (error) {
//   console.log(error)
//   this.$swal({
//     title: "Oops!",
//     text: `This brand does not exist please`, 
//     icon: "warning",
//     button: 'Explore brands on myduuka',
//     closeOnClickOutside: false,
//   }).then( () => {
//     return window.location.href = 'https://www.myduuka.com/brands'
//   })
// }
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  async fetch() {
    console.log(this.$store.state.subdomain)
    const subdomain = this.$store.state.subdomain
    const domain = this.$store.state.domain
    let mainifest = {
      "name": 'Quidip',
      "short_name": 'Quidip',
      "description": 'Quidip',
      "start_url": `https://${ subdomain + domain }`,
      "display": "standalone",
      "background_color": "#F0F0F0",
      "theme_color": "#555555",
      // "icons": [{
      //   "src": resized,
      //   "sizes": "256x256",
      //   "type": "image/png"
      // }]
    }
    const stringManifest = JSON.stringify(mainifest);
    // let link = document.createElement('link');
    // link.rel = 'manifest';
    // const blob = new Blob([stringManifest], {type: 'application/json'});
    // // const manifestURL = URL.createObjectURL(blob);
    // let reader = new FileReader();
    // reader.readAsDataURL(blob);
    // reader.onload = function(){
    //     link.href = reader.result
    //     document.getElementsByTagName('head')[0].appendChild(link);
    //     // document.getElementById('my-manifest-placeholder').setAttribute('href', reader.result);
    // }
    if (!process.server) {
      console.log('location.hostname')
    }
  }
}
</script>
