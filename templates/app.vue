 <template>
  <main class="container" >
    <router-link class="menu-button" to="/nav"><h2>Projects</h2> </router-link>
    <section class="main-view square-content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
    
    <section class="side-view padding-20">
      <h2 class="nav_header">Projects</h2>
      <navigation></navigation>
      <div>                    
      <p class="contact">myEmail@myemail.com</p></div>
    </section>
  
  </main><!-- container -->
</template>

<script>
  module.exports = {
    name: 'app', 
    methods:  {
      togglemenu: function () {
        console.log("clikced")
      }
    }
}  
</script>

  <style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .30s;
}

/*.fade-enter-active {
  transition-delay: .25s;
}*/

.fade-enter, .fade-leave-active {
  opacity: 0
}
  </style>