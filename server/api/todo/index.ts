import { v4 as uuid } from "uuid";
import { db } from "../DataBase";

export default defineEventHandler(async (e) => {


    const method = e.method;

    if (method === "GET") {
        return db.todo
    }
    if (method === "POST") {
        const body = await readBody(e)
        if (!body.item) {
            const TodoNotFound = createError({
                statusCode: 400,
                statusMessage: "Item in Emty",
                data: {}
            })
            sendError(e, TodoNotFound)
        }
        const newTodo = {
            id: uuid(),
            item: body.item,
            complate: false
        }
        db.todo.push(newTodo);
    }
})
