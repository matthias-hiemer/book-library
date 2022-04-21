import {Book} from "../model/Book";

type BookOverviewProps = {
    books : Book[]
}

export default function BookOverview({books} : BookOverviewProps ) {
    return <div>
        {books.map((book) => <div>{book.title}</div>)}
    </div>
}