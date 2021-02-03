import PgPool from "pg-pool";

const state = {
  host: "127.0.0.1",
  port: 5432,
  database: "neptune",
  schema: "demo",
  username: "neptune",
  password: "123456",
  pgPool: undefined
}

const getters = {
  getPgConnUrl: (state) => {
    return "jdbc:postgresql://" + state.host + ":" + state.port + "/" + state.database + "?currentSchema=" + state.schema;
  }
}

const mutations = {
  setHost: (state, host) => {
    state.host = host
  },
  setPort: (state, port) => {
    state.port = port
  },
  setDatabase: (state, database) => {
    state.database = database
  },
  setSchema: (state, schema) => {
    state.schema = schema
  },
  setUsername: (state, username) => {
    state.username = username
  },
  setPassword: (state, password) => {
    state.password = password
  },
  setConfig: (state, config) => {
    state.host = config.host
    state.port = config.port
    state.database = config.database
    state.schema = config.schema
    state.username = config.username
    state.password = config.password
  },
  setPgPool: (state, pgPool) => {
    state.pgPool = pgPool
  }
}

const actions = {
  connectPgsql: ({state, commit}) => {
    return new Promise((resolve, reject) => {
      let flag = !state.port || !state.host || !state.database || !state.schema || !state.password || !state.username
      if (flag) {
        reject()
      }
      const config = {
        host: state.host,
        port: state.port,
        database: state.database,
        user: state.username,
        password: state.password,
        schema: state.schema,
        max: 20
      }
      try {
        const pool = new PgPool(config)
        pool.connect(function (err, client, done) {
          if (err) {
            console.log(err)
            reject("连接失败！")
          }
          client.query("select current_timestamp", (err, res) => {
            done()
            if (err) {
              console.log(err)
              reject("连接失败！")
            }
            commit("setPgPool", pool)
            console.log(res)
            resolve("连接成功！")
          })
        })
      } catch (err) {
        console.log(err)
        reject("连接失败！")
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
