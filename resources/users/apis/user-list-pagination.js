// what is pagination :
//pagination: pagination helps fetching subset of data, it helps to avoid loading too much of data at once.
// improving performance and user experience.
//return only certain amount of orders
// limit = 20 and offset =0 ,,,   limit = 20 means number of item, offset = 0 , starting page = 0

// filtering : can be done using query parameter
// /customer/1/orders?item=microwave&&price=10000
//filtering and pagination together :
///customers/order?item=pen&&limit=10&&offset=0
// if page = 2 and limit = 10 , calculate offset

const userListPaginationQuery = require("../query/user-list-pagination-query");

const userListPagination = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const character = req.query.character;
  try {
    const user = await userListPaginationQuery(page, limit, character);
    if (user != null) {
      res.status(201).json(user);
    } else {
      res.status(404).json("user not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error finding user", error });
  }
};

module.exports = userListPagination;
