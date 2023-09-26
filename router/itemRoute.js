const items = require("../items")
const {getItem,getItems, addItem,deleteItem,updateItem}=require("../controller/itemController")

const item =  {type: 'object',
properties: {
    id: { type: 'string' },
    name: { type: 'string' }
}
}
const getItemsOps = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: item
            }
        }
    },
    handler: getItems

}

const getItemOps = {
    schema: {
        response: {
            200: item
        }
    },
    handler: getItem
}

const postItemOps={
    schema: {
        body:{
            type: 'object',
            required: ["name"],
            properties: {
                name: { type: 'string' }
            }
        },
        response: {
            201: item
        }
    },
    handler: addItem
}

const deleteItemOps = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            }
        }
    },
    handler: deleteItem
}

const updateItemOps={
    schema:{
        response:{
            200:item
        }
    },
    handler:updateItem
}
function itemRoutes(fastify, option, done) {
    fastify.get("/items", getItemsOps)

    fastify.get("/item/:id",getItemOps);

    fastify.post("/item",postItemOps)

    fastify.delete("/item/:id",deleteItemOps)

    fastify.put("/item/:id",updateItemOps)
    done()
}

module.exports = itemRoutes