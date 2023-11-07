<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color:transparent;">
      <q-toolbar>
        <q-btn style="color:black ;"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Jayanth's Landing Page
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Explore More
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Studies',
    caption: 'Bachelor of Engineering',
    icon: 'school',
    link: 'https://sjbit.edu.in/'
  },
  {
    title: 'Github',
    caption: 'github.com/uniquejayanth',
    icon: 'code',
    link: 'https://github.com/uniquejayanth'
  },
  {
    title: 'WhatsApp',
    caption: '9663953949',
    icon: 'chat',
  },
  {
    title: 'LinkedIn',
    caption: 'My Professional Side',
    icon: 'record_voice_over',
    link: 'https://www.linkedin.com/in/jayanth-kumar-s-b85583192/'
  },
  {
    title: 'Twitter',
    caption: '@stoicjay',
    icon: 'rss_feed',
  },
  {
    title: 'Email',
    caption: 'jayanthkumar.s@gnail.com',
    icon: 'mail',
  },
  // {
  //   title: 'Facebook',
  //   caption: '@QuasarFramework',
  //   icon: 'public',
  //   link: 'https://facebook.quasar.dev'
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev'
  // }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
