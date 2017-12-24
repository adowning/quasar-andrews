<template>
  <div>
    <div class="list">
      <div class="list-label">Recent chats</div>
      <div class="item" v-for="n in 3">
        <img class="item-primary" :src="'statics/boy-avatar.png'">
        <div class="item-content has-secondary">
          John Doe
        </div>
        <i class="item-secondary">
          chat_bubble
        </i>
      </div>
      <hr>
      <div class="list-label">Previous chats</div>
      <div class="item" v-for="n in 3">
        <img class="item-primary" :src="'statics/guy-avatar.png'">
        <div class="item-content">
          Jack Doe
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list-label">People</div>
      <div class="item">
        <img class="item-primary" :src="'statics/boy-avatar.png'">
        <div class="item-content has-secondary">
          John
        </div>
        <i class="item-secondary">
          chat_bubble
        </i>
      </div>
      <div class="item two-lines">
        <img class="item-primary" :src="'statics/boy-avatar.png'">
        <div class="item-content has-secondary">
          <div>Jim</div>
          <div>Javascript wiz kid</div>
        </div>
        <i class="item-secondary">
          chat_bubble
        </i>
      </div>
      <div class="item three-lines">
        <img class="item-primary" :src="'statics/boy-avatar.png'">
        <div class="item-content has-secondary">
          <div>Jake</div>
          <div>Passionate about Quasar</div>
        </div>
        <i class="item-secondary">
          chat_bubble
        </i>
      </div>
    </div>
    <div class="list">
      <div class="list-label">Today</div>
      <div class="item three-lines">
        <img class="item-primary" :src="'statics/boy-avatar.png'">
        <div class="item-content inset has-secondary">
          <div>Brunch this weekend?</div>
          <div>
            <span>John Doe</span>
            -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
          </div>
        </div>
        <div class="item-secondary stamp">
          1 week
        </div>
      </div>
      <hr class="inset">
      <div class="item three-lines">
        <img class="item-primary" :src="'statics/boy-avatar.png'">
        <div class="item-content inset has-secondary">
          <div>Brunch this weekend?</div>
          <div>
            <span>John Doe</span>
            -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
          </div>
        </div>
        <i class="item-secondary">info</i>
      </div>
      <hr>
      <div class="list-label">Yesterday</div>
      <div class="item three-lines">
        <img class="item-primary" :src="'statics/boy-avatar.png'">
        <div class="item-content inset">
          <div>Brunch this weekend?</div>
          <div>
            <span>John Doe</span>
            <br> I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
          </div>
        </div>
      </div>
      <hr class="inset">
      <div class="item three-lines">
        <img class="item-primary" :src="'statics/boy-avatar.png'">
        <div class="item-content inset has-secondary">
          <div>Brunch this weekend?</div>
          <div>
            <span>John Doe</span>
            <br> I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
          </div>
        </div>
        <div class="item-secondary stamp">
          1 week
        </div>
        <div class="item-secondary">
          <i slot="target">
            more_vert
            <q-popover ref="popover">
              <div class="list">
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Reply</div>
                </div>
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Forward</div>
                </div>
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Delete</div>
                </div>
              </div>
            </q-popover>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {}
  }
}
</script>
