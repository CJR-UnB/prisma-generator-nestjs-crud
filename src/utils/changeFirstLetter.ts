export function changeFirstLetter(method: "uppercase"|"lowercase", text: string) {
    if (method == "lowercase")
        return text[0].toLowerCase() + text.slice(1)
    if (method == "uppercase")
        return text[0].toUpperCase() + text.slice(1)
}