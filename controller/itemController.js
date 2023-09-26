let items = require("../items")
const {v4:uuid} = require("uuid")

const getItems=(req, reply) => {
    try {
        reply.send(items)
    } catch (error) {
        reply.send(error)
    }
}

const getItem = (req, reply) => {
    try {
        const { id } = req.params
        const item = items.find((item) => item.id === id)
        if (!item) {
            // Item not found, return a 404 response
            reply.code(404).send({ error: 'Item not found' });
            return;
          }
        reply.send(item);
    } catch (error) {
        reply.send(error)
    }
}

const addItem=(req, reply) => {
    try {
        const { name } = req.body
       const item = {
        id: uuid(),
        name,
       }
       items=[...items,item]
       reply.code(201).send(item)
    } catch (error) {
        reply.send(error)
    }
}

const deleteItem=(req, reply) => {
    try {
        const { id } = req.params
        items = items.filter((item)=> item.id !== id)
        reply.send({message: `Item ${id} has been deleted`})
    } catch (error) {
        reply.send(error)
    }
}

const updateItem = (req,reply)=>{
    try {
        const {id} = req.params;
        const {name}=req.body;
        items=items.map((item)=>(item.id === id)?{id,name}:item)
        item=items.find((item)=>item.id===id)
        reply.send(item)
    } catch (error) {
        reply.send(error)
    }
}

module.exports = {
    getItem,
    getItems,
    addItem,
    deleteItem,
    updateItem
}
