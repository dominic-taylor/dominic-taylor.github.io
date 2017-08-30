 <template>
  <main class="container" >
    
    <section class="main-view square-content yellow redColour">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
    
    <section class="side-view padding-20 green blueColour">
      <h2>Projects: <i>for fun and profit</i></h2>
      <navigation></navigation>
      <div>                    
      <p class="contact">myEmail@myemail.com</p></div>
    </section>
  
  </main><!-- container -->
</template>
  <script>
    module.exports = {
      name: 'app'
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