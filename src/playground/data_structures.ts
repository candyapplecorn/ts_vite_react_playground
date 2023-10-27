// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface ADataStructure {
    [key: string]: object;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type anotherDataStructure = {
    date: string
    val: number
}

function helloWorld(): string {
    console.log("Hello World!");
    return "Hello World!"
}

export {
    helloWorld
}

