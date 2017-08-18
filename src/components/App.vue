<template>
  <div id="app">
    <!-- Nav -->
        <div class="hero-head">
          <div class="container">
            <nav class="nav">
              <div class="container">
                <div class="nav-left">
                  <router-link to="/" class="nav-item" style='color:darkslategrey;'>Stickly</router-link>
                </div>
                <span class="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div class="nav-right nav-menu">
                    <a class="nav-item" href='mailto:support@stickly.com'>
                      Contact
                    </a>
                </div>
              </div>
            </nav>
          </div>
        </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

