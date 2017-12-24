<template>
  <div class="layout-padding ">
    <div class="flex wrap gutter">
      <div class="flex wrap gutter">
        <div class="width-1of2 sm-width-1of1">
          <MyMap2>
          </MyMap2>
        </div>
        <!-- <div id="map"></div> -->

      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
// import { Utils, Toast } from 'quasar'
import MyMap2 from './mymap2'
import GMaps from 'gmaps'

export default {
  name: 'LiveView',
  mounted() {
    // this.getUsers()
  },
  data() {
    return {
      // map: ''
      // terms: '',
      // users: [],
      // selectedUser: { address: {} }
    }
  },
  computed: {
    // usersParsed() {
    //   return this.users.map(user => {
    //     return {
    //       // allData: user,
    //       // label: user.name,
    //       // secondLabel: user.email,
    //       // value: user.name
    //     }
    //   })
    // }
  },
  components: {
    MyMap2
  },
  methods: {
    // search(terms, done) {
    //   setTimeout(() => {
    //     done(Utils.filter(terms, { field: 'value', list: this.usersParsed }))
    //   }, 500)
    // },
    // getUsers() {
    //   this.$http.jsonplaceholder.get('users').then(response => {
    //     this.users = response.data
    //   })
    // },
    // selected(user) {
    //   this.selectedUser = user.allData
    // },
    // save() {
    //   this.$http.jsonplaceholder
    //     .put(`users/${this.selectedUser.id}`, this.selectedUser)
    //     .then(response => {
    //       Toast.create.positive('Updated successful!')
    //     })
    // }//
  }
}
</script>

