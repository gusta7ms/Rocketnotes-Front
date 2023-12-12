const AppError = require("../utils/AppError")
const sqliteConfections = require("../database/sqlite")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConfections()
    const checkUserExist = await database
      .get("SELECT * FROM users WHERE email = (?)" , [email])

    if(checkUserExist) {
      throw new AppError("This user already exists")
    }

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?,?,?)",
      [name, email, password]

      )

    return response.status(201).json()

  }
}

module.exports = UsersController