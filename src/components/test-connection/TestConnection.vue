<template lang="html">
  <div id="test-connection">
    <div class="input-wrap">
      <el-input class="half-input" :value="host" @input="setHost">
        <template slot="prepend">数据库地址</template>
      </el-input>
      <el-input :value="port" style="width:240px" @input="setPort">
        <template slot="prepend">数据库端口</template>
      </el-input>
    </div>
    <div class="input-wrap">
      <el-input class="mini-pro" :value="database" @input="setDatabase">
        <template slot="prepend">数据库</template>
      </el-input>
      <el-input class="mini-pro" :value="schema" @input="setPassword">
        <template slot="prepend">schema</template>
      </el-input>
      <el-input class="mini-pro" :value="username" @input="setUsername">
        <template slot="prepend">用户名</template>
      </el-input>
      <el-input class="mini-pro" style="margin-right:0" type="password" :value="password" @input="setPassword">
        <template slot="prepend">密码</template>
      </el-input>
    </div>
    <div class="input-wrap">
      <el-input :value="getPgConnUrl" :disabled="true">
        <template slot="prepend">连接URL</template>
      </el-input>
    </div>
    <el-button type="primary" @click="connectPgsql" plain>连接数据库</el-button>
  </div>
</template>

<script lang="babel">
import {createNamespacedHelpers} from 'vuex'

const {mapGetters, mapMutations, mapActions, mapState} = createNamespacedHelpers("pgState")

export default {
  name: "TestConnection",
  components: {},
  data: function () {
    return {
      errMsg: ""
    }
  },
  methods: {
    ...mapMutations(['setHost', 'setPort', 'setDatabase', 'setSchema', 'setUsername', 'setPassword']),
    ...mapActions(['connectPgsql'])
  },
  computed: {
    ...mapGetters([
      "getPgConnUrl"
    ]),
    ...mapState(['host', 'port', 'database', 'schema', 'username', 'password'])
  }
}
</script>

<style scoped>
#test-connection {
  width: 80%;
  margin-left: 10%;
}

.input-wrap {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
}

.half-input {
  width: 40%;
  flex-grow: 1;
  margin-right: 10%;
}

.mini-pro {
  width: 220px;
  flex-grow: 1;
  margin-right: 20px;
}
</style>
