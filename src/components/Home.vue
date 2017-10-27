<template>
  <div class="hello">
  <body>
    <h1>  </h1>
    <p>  </p>
  </body class="text-justify">
    <h1 class="text-center">{{ msg }}</h1>
    <body>
      <h1>  </h1>
      <p>  </p>
    </body>
      <form >
        <div class="form-group">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" href="#">Obras Civiles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Elecciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Salud</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Otros servicios</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Encuestas</a>
                <a class="dropdown-item" href="#">Proyectos</a>
                <a class="dropdown-item" href="#">Licitaciones</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </ul>
          <body>
            <h1>  </h1>
            <p>  </p>
          </body>
          <body>
            <p>  </p>
            <h2 class="text-center" >Proyecto: Construcción del puente de Bogotá</h2>
            <p>  </p>
          </body>
          <label for="name">Nombre de la organización</label>
          <input type="text" class="form-control" id="name" v-model = "name" aria-describedby="nameHelp" placeholder="">
        </div>
        <div class="form-group">
          <label for="price">Ingrese su cotización</label>
          <input  type="text" class="form-control" id="price" placeholder="">
        </div>
        <div class="form-group">
          <label for="time">Tiempo estimado del proyecto</label>
          <input type="text" class="form-control" id="time" placeholder="">
        </div>
        <div class="form-group">
          <label for="exp">Experiencia en años en el sector público</label>
          <input type="text" class="form-control" id="exp" placeholder="">
        </div>
        <button type="button" class="btn btn-primary" @click="setName">Guardar</button>
      </form>
      <h6 class="text-right">Copy Right Equipo FairPlay</h6>
      <h6 class="text-right">Hackaton Blockchain 2017</h6>
    <div id="container">
    </div>
  </div>
</template>

<script>
import Account from '@/handlers/account'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Gobierno de Colombia: Juega Limpio',
      name:''
    }
  },
  beforeCreate () {
    Account.init()
  },
  mounted(){
    this.getName()
  },
  methods:{
    getName (){
      Account.getName().then(name => this.name = name).catch(console.error)
    },
    setName(){
      Account.setName(this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
<style>
