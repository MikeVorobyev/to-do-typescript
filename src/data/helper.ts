type GenerateId = () => string

export const generateId: GenerateId = () => crypto.randomUUID()



// export const generateId: GenerateId = () => {
//     return Math.random().toString(16).slice(2) + new Date().getTime().toString()
// }