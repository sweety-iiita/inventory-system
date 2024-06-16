const db = require("../../../models/index");
const { Op } = require("sequelize");

async function getAllUsersQuery(page, limit, character) {
  let offset = (page - 1) * limit;
  const user = await db.User.findAndCountAll({
    limit: limit, // limit should be integer
    offset: offset, // offset should be integer
    where: {
      userName: {
        [Op.like]: `%${character}%`,
      },
    },
  });
  return user; // user is an object count and rows
  // for better knowledge :
  //count = total number of rows
  // total number of pages = Math.ceil (count / limit)
  // current page = page
  // users : rows
}

module.exports = getAllUsersQuery;

//query :
//Executing (default): SELECT "id", "userName", "email", "contact", "profilePhoto",
//"createdAt", "updatedAt" FROM "Users" AS "User"
//WHERE "User"."userName" LIKE '%s%' LIMIT '2' OFFSET 2;
//here count will come = 1, user = {} this will be empty

// here where is having more priority than like operator
