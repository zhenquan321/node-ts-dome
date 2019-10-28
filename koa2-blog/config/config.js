module.exports = {
  port: process.env.PORT || 80,
  session: {
    key: 'jszen',
    maxAge: 86400000
  },
  mongodb: 'mongodb://localhost:27017/jszen'
}
