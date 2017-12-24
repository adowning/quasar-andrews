<template>
  <div>
    <div class="layout-padding">
      <div class="card">
        <div class="item two-lines text-light-blue">
          <img class="item-primary" :src="marker.photoUrl|| 'https://lh3.googleusercontent.com/-zlm-dt5DLZ4/AAAAAAAAAAI/AAAAAAAAAAA/DwcwNnOZbIg/s120-c/photo.jpg'">

          <div class="item-content">
            <div>{{marker.name}}</div>
            <div class="text-light-grey text-sm-grow-5" v-if="marker.msgTS">
              {{msgTimeFromX(marker.msgTS)}} :
              <i class="fa fa-calendar"></i> {{msgDate(marker.msgTS)}} at {{msgTime(marker.msgTS)}}
            </div>
          </div>
        </div>

        <div class="card-content" v-show="marker.text">
          {{marker.text}}

        </div>
        <div style="padding-left: 25px">
          <img style="width: 75%" class="item-primary" :src="imageURL" v-if="imageURL">
        </div>
        <div class="card-actions">
          <div class="text-primary">
            <i>mode_comment</i> 8 comments
          </div>

        </div>
      </div>

    </div>

  </div>
</template>
<script>
/*
import Compname from 'components/Compname.vue'
*/
import { fbstorage } from '../main.js'
import moment from 'moment'
export default {
  // componenents: {compname: Compname},
  name: 'marker',
  created: function() {
    try {
      this.dataLoading = true
      // data.createList()
    } catch (err) {
      console.log(err)
    } finally {
      this.dataLoading = false
    }
  },
  props: ['marker'],
  data: function() {
    return {
      data: [],
      dataLoading: false,
      markerID: this.marker['.key'],
      imageURL: '',
      imageURL2: '',
      avatarDefault: '../src/assets/profile_placeholder.png'
    }
  },
  methods: {
    msgDate: function(timestamp) {
      return moment(timestamp).format('MMMM-DD-YYYY')
    },
    msgTime: function(timestamp) {
      return moment(timestamp).format('HH:mm')
    },
    msgTimeFromX: function(timestamp) {
      // var now = moment()
      return moment(timestamp).from(moment())
    },
    delay: function() {
      return new Promise(function(resolve) {
        setTimeout(resolve, 10000)
      })
    },
    firebaseImage: function() {
      // If the image is a Firebase Storage URI we fetch the URL.
      var _this = this
      if (this.marker.imageUrl) {
        var imgURL = this.marker.imageUrl
        if (imgURL.startsWith('gs://')) {
          // var loadingimg = LOADING_IMAGE_URL // Display a loading image first.
          fbstorage
            .refFromURL(imgURL)
            .getMetadata()
            .then(function(metadata) {
              _this.imageURL = metadata.downloadURLs[0]
              // return metadata.downloadURLs[0]
            })
        } else {
          return imgURL
        }
      } else {
        return ''
      }
    }
  },
  computed: {
    valid: function() {
      return this.filename.length > 0 && this.file.length > 0
    },
    fbImage: function() {
      // If the image is a Firebase Storage URI we fetch the URL.
      var _this = this
      if (_this.marker.imageUrl) {
        var imgURL = this.marker.imageUrl
        if (imgURL.startsWith('gs://')) {
          // var loadingimg = LOADING_IMAGE_URL // Display a loading image first.
          fbstorage
            .refFromURL(imgURL)
            .getMetadata()
            .then(function(metadata) {
              _this.imageURL = metadata.downloadURLs[0]
              // console.log('fbImage: ', _this.imageURL)
            })
        } else {
          return imgURL
        }
      } else {
        return ''
      }
    },
    computeThis: function() {
      return this.item.toLowerCase()
    }
  },
  asyncComputed: {
    img() {
      // console.log('fbImage: ', this.fbImage)
      return new Promise(resolve => this.firebaseImage())
    }
  }
  /*
  watch: {
    imgData: function (val, oldVal) {
      console.log('new, old', val, oldVal)
    }
  }
  */
  /*
  destroyed: function() {
    //  code here
  } */
}
</script>
<style scoped>

</style>
