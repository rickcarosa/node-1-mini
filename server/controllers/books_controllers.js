let books = [];
let id = 0;

module.exports = {
    read: (request, response) => {
        response.status(200).send(books)  // data that is sent back from server is after .send
    },
    create: (request, response) => {
        let book = {
            title: request.body.title,
            author: request.body.author,
            id: id
        }
        books.push(book)
        id++
        response.status(200).send(books) 
    },
    update: ( request, response ) => {
        let index = null;
        books.forEach((book, i) => {
          if(book.id === Number(request.params.id)) index = i;
        })
        books[ index ] = {
          id: books[ index ].id,
          title: request.body.title || books[ index ].title,
          author: request.body.author || books[ index ].author
        };
          response.status(200).send( books );
    },
    delete: ( request, response) => {
        let index = null;
        books.forEach((book, index) => {
            if(book.id === Number(request.params.id)) index = i;
            books.splice(index, 1)
            response.status(200).send( books );
        })
    }
};

