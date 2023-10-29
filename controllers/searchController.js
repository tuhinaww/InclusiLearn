exports.getSearchPage = (req, res) => {
    const searchValue = req.query.search; 
    const name = "new"; 
    res.render('afterSearch', { search: searchValue, name: name });
};
