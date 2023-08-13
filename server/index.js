const express = require('express')
const app = express()

const cors = require('cors')

app.use(express.json())
app.use(cors())

//Routers
const productRouter = require('./routes/Products')
const userRouter = require('./routes/Users')
const reviewRouter = require('./routes/Reviews')

app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/products/reviews', reviewRouter)


const db = require('./models')

// associations for Users table
db.Users.hasMany(db.Reviews, { foreignKey: 'user_id' });
db.Users.hasMany(db.Orders, { foreignKey: 'user_id' });
db.Users.hasOne(db.Carts, { foreignKey: 'user_id' });

//associations for Products table
db.Products.hasMany(db.Reviews, { foreignKey: 'product_id', onDelete: 'cascade' });

//associations for Reviews table
db.Reviews.belongsTo(db.Products, { foreignKey: 'product_id' });
db.Reviews.belongsTo(db.Users, { foreignKey: 'user_id' });

//associations for Orders table
db.Orders.belongsTo(db.Users, { foreignKey: 'user_id' });
db.Orders.hasMany(db.Order_Items, { foreignKey: 'order_id' });

//associations for Order_Items table
db.Order_Items.belongsTo(db.Products, { foreignKey: 'product_id' });
db.Order_Items.belongsTo(db.Orders, { foreignKey: 'order_id' });

//associations for Carts table
db.Carts.belongsTo(db.Users, { foreignKey: 'user_id' });
db.Carts.hasMany(db.Cart_Items, { foreignKey: 'cart_id' });

//associations for Cart_items table
db.Cart_Items.belongsTo(db.Products, { foreignKey: 'product_id' });
db.Cart_Items.belongsTo(db.Carts, { foreignKey: 'cart_id' });

//associations for PasswordReset table
db.PasswordReset.belongsTo(db.Users, { foreignKey: 'user_id' });

// Sync the database and start the server
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server is listening on port 3001....')
      })
})

