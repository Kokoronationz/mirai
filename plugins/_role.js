const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Beginner': 0,
  'Bronze III': 10,
  'Bronze II': 20,
  'Bronze I': 30,
  'Silver III': 40,
  'Silver II': 50,
  'Silver I': 60,
  'Gold III': 70,
  'Gold II': 80,
  'Gold I': 90,
  'Crystal III': 100,
  'Crystal II': 110,
  'Crystal I': 120,
  'Master III': 130,
  'Master II': 140,
  'Master I': 150,
  'Champion III': 160,
  'Champion II': 170,
  'Champion I': 180,
  'Titan III': 190,
  'Titan II': 200,
  'Titan I': 210,
  'Legend 💎': 250
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
