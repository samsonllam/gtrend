<template>
  <div class="basic-control">

    <!-- keyword list -->
    <ul class="list-group">
      <li v-for="(keyword, index) in keywords" :key='index' class="list-group-item list-group-item-action">
        {{ keyword.name }}
      </li>
    </ul>

    <!-- repo list -->
    <ul class="list-group">
      <li v-for="(repo, index) in repos" :key='index' class="list-group-item list-group-item-action">
        {{ repo.full_name }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'basicControl',
  data () {
    return {
      keywords: [
        {
          name: 'Vue'
        },
        {
          name: 'React'
        },
        {
          name: 'Machine Learning'
        }
      ],
      result: {
        'total_count': 173181,
        'incomplete_results': false,
        'items': [
          {
            'id': 11730342,
            'node_id': 'MDEwOlJlcG9zaXRvcnkxMTczMDM0Mg==',
            'name': 'vue',
            'full_name': 'vuejs/vue',
            'private': false,
            'owner': {
              'login': 'vuejs',
              'id': 6128107
            },
            'html_url': 'https://github.com/vuejs/vue',
            'description': '?? A progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
          },
          {
            'id': 77189043,
            'node_id': 'MDEwOlJlcG9zaXRvcnk3NzE4OTA0Mw==',
            'name': 'vue2-elm',
            'full_name': 'bailicangdu/vue2-elm',
            'private': false,
            'owner': {
              'login': 'bailicangdu',
              'id': 20297227
            },
            'html_url': 'https://github.com/bailicangdu/vue2-elm',
            'description': '基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用'
          }
        ]
      }
    }
  },
  computed: {
    repos () {
      return this.result.items
    }
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
