(() => {
    module.exports = {
        bookView: require('./bookView'),
        bookAdd: require('./bookAdd'),

        titleUpdate: require('./update/titleUpdate'),
        authorUpdate: require('./update/authorUpdate'),
        genreUpdate: require('./update/genreUpdate'),
        publisherUpdate: require('./update/publisherUpdate'),
        publishedDateUpdate: require('./update/publishedDateUpdate'),

        titleDelete: require('./delete/titleDelete'),
        isbnDelete: require('./delete/IsbnDelete')
        
    };
})();