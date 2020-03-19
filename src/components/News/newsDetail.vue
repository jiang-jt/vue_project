<template>
  <div class="temp1">
    <nav-bar title="新闻详情"></nav-bar>
    <div>
      <span v-html="str"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      str: ""
    }
  },
  methods: {

  },
  created() {
    console.log(this.$route.query.html)
    let str = this.$route.query.html
    let index = str.indexOf('?')
    let url = '/newsDetail' + str.substring(index)

    this.$ajax.get(url)
      .then(res => this.str = res.data)
  },
  mounted() {

  }
}

</script>
<style></style>
