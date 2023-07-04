function Message(props: any) {
    console.log("props", props)
    const { name, isLoading } = props
    if (isLoading)
        return <h1>Loading...</h1>
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}
export default Message;