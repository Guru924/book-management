import express from 'express'
const app = express()
const port = 3000

const books = [
    {id: 1, title: "1984", author: "George Orwell"},
]

app.get('/books', (req, res) => {
  res.send(books)
})

app.post('/books', (req, res)=> {
    const {title, author} = req.body;
    if(!title || !author)
        return res.status(400).send('Title and author are required');

    const newBook = {
        id: books.length + 1,
        title,
        author,
    };
    books.push(newBook);
    res.status(201).send(newBook);
})

app.put("/books/:id", (req, res)=> {
    const {id} = req.params;
    const {title, author} = req.body;

    if(!title || !author) return res.status(400).send('Title and author are required');

    const updatedBooks = books.map((book)=> book.id === parseInt(id) ? {...book, title, author} : book);
    if(!updatedBooks) return res.status(404).send('Books not found');

    books = updatedBooks;
    res.status(200).send(updatedBooks);
})

app.delete("/books/:id", (req, res)=> {
    const {id} = req.params;
    const deletedBook = books.filter(book => book.id !== parseInt(id));
    if(deletedBook.length === books.length) return res.status(404).send("Book not found");
    books = deletedBook;
    res.status(204).send("Book deleted successfully");
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
