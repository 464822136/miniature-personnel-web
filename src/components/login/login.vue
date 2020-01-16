<template>
    <div class="div-login">
      <el-form ref="user" label-width="100px" :rules="rules"  :model="user">
        <div class="div-login-title">
          <span class="title">员工登录</span>
        </div>
        <el-form-item required label="用户名" prop="username">
          <el-input v-model="user.username"/>
        </el-form-item>
        <el-form-item required label="密码" prop="password">
          <el-input type="password" v-model="user.password"/>
        </el-form-item>
        <el-button size="medium" @click="login" type="primary">登录</el-button>
      </el-form>
    </div>
</template>

<script>
export default {
  created () {
  },
  name: 'login',
  data () {
    return {
      user: { username: 'lanmu', password: '123', grant_type: 'password' },
      rules: {
        username: [
          { required: true, message: '账号不能为空' }
        ],
        password: [
          { required: true, message: '密码不能为空' }
        ]
      },
      authenticatedUser: {}
    }
  },
  methods: {
    login () {
      const { username, password } = this.user
      this.$refs['user'].validate((valid) => {
        if (valid) {
          this.$axios({
            url: 'http://localhost:1234/personnel/oauth/token',
            method: 'POST',
            data: this.$qs.stringify({ username: username, password: password, grant_type: 'password' }),
            headers: {
              'Authorization': 'Basic bGFubXU6MTIz'
            }
          })
            .then((res) => {
              this.$store.state.token = res.data.access_token
              this.$store.state.user = res.data.user
              this.listMenu(res.data.user.id)
            })
            .catch(() => {
              this.$message({ type: 'error', message: '账号密码错误' })
            })
        } else {
          return false
        }
      })
    },
    checkToken (token) {
      this.$axios({
        url: 'http://localhost:1234/personnel/oauth/check_token',
        method: 'POST',
        data: this.$qs.stringify({ token: token }),
        headers: {
          'Authorization': 'Basic bGFubXU6MTIz'
        }
      })
        .then((res) => {
          window.console.log(res)
        })
    },
    listMenu (uid) {
      this.$axios.get('menu/listMenu?uid=' + uid)
        .then((response) => {
          this.$store.state.menus = response.data
          this.success('/')
        })
        .catch(() => {

        })
    },
    loadRouter (routes) {
      this.$router.addRoutes(routes)
    },
    success (path) {
      this.$router.push(path)
    },
    findAttribute (parameter) {
      return this.$store.state[parameter]
    },
    setAttribute (name, value) {
      this.$store.state[name] = value
    }
  }
}
</script>

<style scoped>
  .div-login {
    width: 50%;
    margin: 0 auto;
  }
  .title {
    font-weight: bold;
    font-size: 2rem;
  }
</style>
