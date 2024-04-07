import { db } from "../DataBase/index"

export default defineEventHandler((e) => {
    const method = e.method;
    const context = e.context
    const { id } = context.params;
    const findTodoId = (todoid: any) => {
        let index;
        const todo = db.todo.find((t, i) => {
            if (t.id === todoid) {
                index = i
                return true
            }
            return false
        })
        if (!todo) {
            const TodoNotFound = createError({
                statusCode: 404,
                statusMessage: "Todo Not Found",
                data: {}
            })
            sendError(e, TodoNotFound)
        }
        return { todo, index }
    }
    if (method === "PUT") {
        const { todo, index } = findTodoId(id)

        const updateTodo = {
            ...todo,
            complate: !todo.complate
        }
        db.todo[index] = updateTodo
    }
    if (method === "DELETE") {

        const { index } = findTodoId(id)
        db.todo.splice(index, 1)
        return {
            message: "todo is deleted"
        }
    }
})  