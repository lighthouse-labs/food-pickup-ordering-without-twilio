const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

// DB FUNCTIONS

// Function 1: fetch name, email, password, phone
const getUserInfo = (email) => {
  return db.query(
    `SELECT name, email, password, phone
    FROM users
    WHERE email = $1;`,
    [`${email}`])
  .then((result) => {
    if (result.rows.length !== 0 ) {
      return result.rows;
    } else {
      return null;
    }
  });
}

// Function 2: fetch previous order by #, menu items with quantity, total cost
// We can add time
const getOrderInfo = (email) => {
  return db.query(
    `SELECT email, orders.id, order_menu_items.quantity, menu_items.name, orders.total_cost
    FROM users
    JOIN orders ON users.usersID = orders.id
    JOIN orders_menu_items ON orders.id = orders_menu_items.order_id
    JOIN menu_items ON orders_menu_items.menu_item_id = menu_items.id
    WHERE email = $1;
    `,
    [`${email}`]
  )
  .then((result) => {
    if (result.rows.length !== 0 ) {
      return result.rows;
    } else {
      return null;
    }
  });
}

// Function 3: fetch all menu items, use to populate menu on load
const getMenuItems = () => {
  return db.query(
    `SELECT *
    FROM menu_items`
  )
  .then((result) => {
    return result.rows;
  })
};

// Function 4: Login/registration - Check if user email exists (getUserByEmail)
// Use getuserbyemail (revisit if needed)


// Function 5: Check if user is logged in (cookies) (encryption)
// revisit when we implement cookies

const verifyCookie = () => {
  const userId = req.session.userId;
  if(!userId) {
    res.send("Not logged in")
  }
}


// Function 6: Compare hashed passwords (hash)
// revisit when we implement password hash

const verifyPassword = () => {


}

// Function 7: post new user to database
const addUser = () => {
  return db.query (`
    INSERT INTO users (name, email, password, phone)
    VALUES ($1, $2, $3, $4)
    RETURNING id;
  `,
  [`${users.name}`, `${users.email}`, `${users.password}`, `${users.phone}`])
  .then((result) => {
    return result.rows[0] //returns ID
  })
  .catch((error) => {
    console.log(error.message)
  })
};

// Function 8: update user name in database

const updateUserName = (name, email) => {
  return db.query (`
    UPDATE users
    SET users.name = $1
    WHERE user.email = $2;
    `,
    [`${name}`, `${email}`]
  )
};

// Function 9: update user phone in database

const updateUserPhone = (phone, email) => {
  return db.query (`
    UPDATE users
    SET users.phone = $1
    WHERE user.email = $2;
    `,
    [`${phone}`, `${email}`]
  )
};

// Function 10: update user password in database
// Will utilize function 5

const updateUserPassword = (currentPassword, newPassword, email) => {

  const userInfo = getUserInfo(email);
  // bcrypt not yet required
  // if (bcrypt.compareSync(currentPassword, userInfo.password)) {
  //   console.log ("ok it works")
  // };

  return db.query (`
    UPDATE users
    SET users.password = $1
    WHERE user.email = $2;
    `,
    [`${newPassword}`, `${email}`]
  )

  // if bycrypt doesn't match return null
};


// Function 11: create order object for current order array

// {
//   cartItems: [
//     object1 =
//       {orderItem,
//       quantity,
//       price},
//     object2 =
//       {orderItem,
//       quantity,
//       price}
//     ],
//   // function to add cartItems
//     function addCartItems = () => {

//     },
//   // function calculates Fees
//     // iterate through cartitem array
//     // add all prices
//     // *.1
//   // function calculates tax
//   // function calculates total cost
// };


// Function 12: post order object (function 10)
// Need to figure out how we work with current order object before we code this


//FUNCTION 13: logout?

// NON DATABASE FUNCTIONS
// Function: Create right pane element??? may be a script
// Function: Create left pane element??? may be a script
// Function: manipulate Current-order object


// SCRIPTS
// show right pane on click
// Pull price from database (right pane)
// Calculate Fees/tax
// Calculate total


// show left pane on click






module.exports = { getUsers };
