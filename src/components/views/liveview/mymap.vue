<template>
  <div>
    <div class="card fit">
      <div class="card-title bg-teal text-white">
        Adress of {{ name}}
      </div>
      <div class="card-content bg-white">
        <div id="map"></div>

      </div>
    </div>
    <!-- <div class="card-actions justify-center flex">
      <div class="width-1of3 sm-width-3of3">
        <button class="primary outline raised fit" @click="save()">Save</button>
      </div>
      <div class="width-1of3 sm-width-3of3">
        <button class="teal outline raised fit" @click="$refs.modal.close()">Close</button>
      </div>
    </div> -->
    <marker v-for="(marker,key) in markersFiltered" :marker="marker">
      {{marker}}
    </marker>

    <div id="mapx"></div>
  </div>
</template>

<script type="text/javascript">
/* eslint-disable */
import { Toast } from 'quasar'
import GMaps from 'gmaps'
import marker from 'marker.vue'

// import firebase from 'firebase'
import { fbdb, fbstorage, eventBus, fbauth } from '../../../main.js'
let markersRef = fbdb.ref('messages')
console.log(markersRef.limitToLast(20))
export default {
  props: ['user'],
  components: {
    marker: marker,
    Vue: Vue,
    uploadImage: uploadImage
  },
  data() {
    return {
      map: '',
      name: ''
    }
  },
  firebase: {
    // messagelist: fbdb.ref('messages'),
    // messages.sort(sort_by('msgTS', false, parseInt))
    markers: markersRef.limitToLast(20)
  },
  // props: ['user'],
  methods: {},
  computed: {
    markersFiltered: function() {
      return this.markers.sort(this.sort_by('msgTS', true, parseInt))
    }
  },
  mounted() {
    //  lat: 32.317723032,
    //   lng: -95.248990095

    let vm = this
    // new GMaps({
    //   div: '#map',
    //   lat: -12.043333,
    //   lng: -77.028333
    // })
    this.map = new GMaps({
      el: '#map',
      lat: parseFloat(32.317723032),
      lng: parseFloat(-95.248990095),
      zoom: 12
      // dblclick(e) {
      //   vm.map.removeMarkers()
      //   vm.addMarker(e.latLng.lat(), e.latLng.lng())
      // }
    })
    // this.addMarker(this.user.address.geo.lat, this.user.address.geo.lng)
    // var vm = this
    fbauth.onAuthStateChanged(function(user) {
      if (user) {
        vm.auser = user
        vm.name = user.displayName
        // vm.email = vm.user.email
        // vm.photo = vm.user.photoURL
        // vm.userId = vm.user.uid
      }
    })
  }
}
</script>
<style scoped>
#map {
  width: 900px !important;
  height: 900px !important;
}
</style>
