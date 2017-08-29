   <template  id="navigation">
       <nav class="">
            <ul>
              <li><router-link class="nav_link" to="/pong">Pick-Up Pong</router-link></li>
              <li><router-link class="nav_link" to="/fin">Fin</router-link></li>
              <li><router-link class="nav_link" to="/talk-wellington">Talk Wellington</router-link></li>
              <li><router-link class="nav_link" to="/trails">Trails</router-link></li>
              <li><router-link class="nav_link" to="/pong">ViewChoose</router-link></li>
              <li> <a href="/">Home</a></li>
            </ul>             
        </nav>
  </template>
  
  <script>
    module.exports = {
      name: 'navigation'
    }
  </script>      