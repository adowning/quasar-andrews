<template>
  <div class="tchat__container">
    <messages></messages>
    <channels></channels>

  </div>
</template>

<script>
import Messages from './messages/messages'
import Channels from './channels/channels'

export default {
  name: 'tchat',
  components: { Messages, Channels }
}
</script>

<style scoped>
.tchat__container {
  height: 100%;
}
</style>
