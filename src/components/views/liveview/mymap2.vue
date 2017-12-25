<!--<template>
  <div>
    <vmap :position="position" :zoom="zoom" @zoom="onZoom" @move="onMove">
      <vmap-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&#34;http://osm.org/copyright&#34;>OpenStreetMap</a> contributors"
      ></vmap-tile-layer>
      <vmap-marker v-for="markerPosition in markers" :position="markerPosition" :tabletId="markerPosition"></vmap-marker>
      <vmap-layer-group>
        <vmap-geo-json :data="geoJson" :feature-style="geoJsonStyle"></vmap-geo-json>
        <vmap-circle :position="{lat: 49.614, lng: 6.084}" :radius="1000" :stroke="true" color="#990"></vmap-circle>
      </vmap-layer-group>
      <vmap-rectangle :bounds="[{lat: 49.614, lng: 6.084}, { lat: 49.62, lng: 6.118 }]"></vmap-rectangle>
      <vmap-polyline :latlngs="[{lat: 49.614, lng: 6.084}, { lat: 49.62, lng: 6.118 }]"></vmap-polyline>
    </vmap>
  </div>
</template>-->
<template>
  <div class="card bg-white">
    <div class="card-title bg-teal text-white">
      {{cardTitle}}
      <div class=" float-right">
      </div>
    </div>
    <div class="card-content">
      <div class="flex">
        <vmap :position="position" :zoom="zoom" @zoom="onZoom" @move="onMove">
          <vmap-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&#34;http://osm.org/copyright&#34;>OpenStreetMap</a> contributors"></vmap-tile-layer>

          <vmap-marker v-for="markerPosition in markers" :key="markerPosition.key" :position="markerPosition" :tabletId="markerPosition"></vmap-marker>
          <!-- <vmap-layer-group>
            <vmap-geo-json :data="geoJson" :feature-style="geoJsonStyle"></vmap-geo-json>
            <vmap-circle :position="{lat: 49.614, lng: 6.084}" :radius="1000" :stroke="true" color="#990"></vmap-circle>
          </vmap-layer-group>
          <vmap-rectangle :bounds="[{lat: 49.614, lng: 6.084}, { lat: 49.62, lng: 6.118 }]"></vmap-rectangle>
          <vmap-polyline :latlngs="[{lat: 49.614, lng: 6.084}, { lat: 49.62, lng: 6.118 }]"></vmap-polyline> -->
        </vmap>
      </div>
    </div>
  </div>
</template>
<script>
import * as components from './components/components'
import { fbdb, fbstorage, eventBus, fbauth } from '../../../main.js'
console.log(fbdb)
let markersRef = fbdb.ref('owntracks/ash')
console.log(markersRef)
// import firebase from 'firebase'
// var firebaseApp2 = firebase.initializeApp("https://andrews-test.firebaseio.com/owntracks/ash")
// var itemsRef2 = new Firebase("https://vuefiredemo.firebaseio.com/items/");
let itemsRef = fbdb.ref('items')

// var markersRef = new Firebase('https://andrews-test.firebaseio.com/owntracks/ash');

export default {
  name: 'app',
  components: {
    Vmap: components.Map,
    VmapMarker: components.Marker,
    VmapGeoJson: components.GeoJson,
    VmapCircle: components.Circle,
    VmapLayerGroup: components.LayerGroup,
    VmapPolyline: components.Polyline,
    VmapRectangle: components.Rectangle,
    VmapTileLayer: components.TileLayer
  },
  data() {
    return {
      lat: parseFloat(32.317723032),
      lng: parseFloat(-95.248990095),
      zoom: 13,
      markersTotal: null,

      newMarker: { lat: '', lng: '' },
      geoJson: {
        type: 'Polygon',
        coordinates: [
          [
            [6.114921569824219, 49.612378400270195],
            [6.125907897949219, 49.618495606374275],
            [6.139812469482421, 49.617272226578514],
            [6.141357421875, 49.61148856087291],
            [6.14032745361328, 49.60626042633693],
            [6.126594543457031, 49.60247802203419],
            [6.113376617431641, 49.60715036117516],
            [6.114921569824219, 49.612378400270195]
          ]
        ]
      },
      geoJsonStyle: function() {
        return {
          color: '#933'
        }
      }
    }
  },
  computed: {
    position() {
      return {
        lat: this.lat,
        lng: this.lng
      }
    },
    tabletId() {
      return {
        tabletId: this.key
      }
    },
    markersFiltered: function() {
      // return this.markers.sort(this.sort_by('msgTS', true, parseInt))
      return this.markers
    }
  },
  firebase: {
    markers: markersRef.limitToLast(20),
    items: itemsRef.limitToLast(25)
  },
  methods: {
    onZoom(data) {
      this.zoom = data.zoom
    },
    getTotal() {
      console.log(this.markersTotal)
    },
    onMove(data) {
      this.lat = data.position.lat
      this.lng = data.position.lng
    },

    removeMarker(index) {
      this.markers.splice(index, 1)
    },

    addMarker() {
      this.markers.push(this.newMarker)
      this.newMarker = { lat: '', lng: '' }
    },

    addMarkerAtMapPosition() {
      this.markers.push({
        lat: this.lat,
        lng: this.lng
      })
    },

    updateMarkerLat(index, event) {
      this.markers.splice(index, 1, {
        ...this.markers[index],
        lat: event.target.value
      })
    },

    updateMarkerLng(index, event) {
      this.markers.splice(index, 1, {
        ...this.markers[index],
        lng: event.target.value
      })
    }
  }
}
</script>
