const useTodos = () => {
    const { data: todos } = useAsyncData("todo", async () => {
        return $fetch("/api/todo")
    })
    async function addtodo(item: string) {
        if (!item) return
        await $fetch("/api/todo", {
            method: "POST",
            body: { item }
        }
        )
        refreshNuxtData("todo")
    }
    async function updateTodo(id: any) {
        await $fetch(`/api/todo/${id}`, { method: "PUT" })
        refreshNuxtData("todo")
    }
    async function deletetodo(id: any) {
        await $fetch(`/api/todo/${id}`, { method: "DELETE" })
        refreshNuxtData("todo")
    }
    return {
        todos,
        addtodo,
        updateTodo,
        deletetodo
    }
}
export default useTodos