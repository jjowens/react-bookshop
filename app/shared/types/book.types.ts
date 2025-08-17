import { type AuthorType } from "./author.types"

export type BookType = {
    bookID: number,
    title?: string,
    genre?: string,
    authors?: [AuthorType],
    bookthumbnail?: string
}