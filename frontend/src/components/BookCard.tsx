import {Book} from "../model/Book";
import "./BookCard.css"

type BookCardProps = {
    book : Book
}

export default function BookCard({book} : BookCardProps) {


    return <div key={book.isbn} className={"book-card"}>

        <div className={"book-card__icon"}>📖</div>
        <div>
            <div className={"book-card__title"}>{book.title}</div>
            <div className={"book-card__isbn"}>(ISBN: {book.isbn})</div>
        </div>



    </div>;
}