<template>
  <div class="basic-control">
    <button type="button" class="btn btn-primary" @click="showToastr">Show Toastr</button>
    <button type="button" class="btn btn-warning" @click="hideToastr">Hide Toastr</button>
    <div class="info-box card">
        <h4>{{this.status}}</h4>

        <p> age : <input type="number" v-bind:value="age"> (v-bind)</p>
        <!-- v-bind:value 可使用簡寫 :value 表示 -->

        <p> age : <input type="number" v-model="age"> (v-model)</p>

        <button type="button" v-on:click="showStatus"> Show Status Toastr</button>
        <!-- v-on:click 可以使用簡寫 @click 表示 -->
    </div>
    <div class="container">
      <form>
        <div class="form-group row">
          <label class="col-sm-4 form-control-label">Made From</label>
          <div class="col-sm-8">
              <input type="text" v-model="madeFrom" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 form-control-label">Product Name</label>
          <div class="col-sm-8">
              <input type="text" v-model="product.name" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 form-control-label">Product Price</label>
          <div class="col-sm-8">
              <input type="text" v-model="product.price" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 form-control-label">Product Desc</label>
          <div class="col-sm-8">
              <input type="text" v-model="product.description" class="form-control">
          </div>
        </div>
      </form>
    </div>
    <product-card v-bind:made-from="madeFrom" :product="product" :more-info="showMoreInfo" v-on:madeFromChanged="onMadeFromChanged"></product-card>
  </div>
</template>

<script>
import toastr from 'toastr'
import ProductCard from './ProductCard.vue'

export default {
  name: 'basicControl',
  data () {
    return {
      birthYear: 1983,
      madeFrom: 'Taiwan',
      product: {
        name: 'Big pen',
        description: 'It is nice!',
        price: 99.12
      }
    }
  },
  computed: {
    status: function () {
      return '我出生於' + this.birthYear + '年'
    },
    age: {
      get: function () {
        return new Date().getFullYear() - this.birthYear
      },
      set: function (v) {
        this.birthYear = new Date().getFullYear() - v
      }
    }
  },
  watch: {
    birthYear: function (newValue, oldValue) {
      toastr.warning(`birth year has changed from ${oldValue} to ${newValue}`, 'User Status')
    }
  },
  methods: {
    showStatus: function () {
      toastr.success(this.status, 'User Status')
    },
    showToastr: function () {
      // Display a warning toast, with no title
      toastr.warning(
        'My name is Inigo Montoya. You killed my father, prepare to die!'
      )

      // Display a success toast, with a title
      toastr.success('Have fun storming the castle!', 'Miracle Max Says')

      // Display an error toast, with a title
      toastr.error(
        'I do not think that word means what you think it means.',
        'Inconceivable!'
      )

      // Override global options
      toastr.success(
        'We do have the Kapua suite available.',
        'Turtle Bay Resort',
        {
          timeOut: 5000
        }
      )
    },
    hideToastr: function () {
      // Remove current toasts using animation
      toastr.clear()

      // Immediately remove current toasts without using animation
      // toastr.remove()
    },
    showMoreInfo: function (id) {
      toastr.info('More Info ed laaa')
    },
    onMadeFromChanged: function (updatedMadeFrom) {
      this.madeFrom = updatedMadeFrom
    }
  },
  components: {
    ProductCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
