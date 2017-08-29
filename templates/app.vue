 <template>
  <main class="container" >
    
    <section class="main-view square-content yellow redColour">
        <router-view></router-view>
    </section>
    
    <section class="side-view padding-20 green bluetext">
      <h2>Projects:</h2>
      <h3><i>for fun and profit</i></h3>
      <navigation></navigation>
      <div><p>dataylorx@gmail.com</p></div>
    </section>
  
  </main><!-- container -->
</template>
  <script>
    module.exports = {
      name: 'app'
    }
  </script>