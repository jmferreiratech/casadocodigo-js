module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function (err, results) {
            res.render('produtos/lista', {lista: results});
        });
        connection.end();
    });

    app.get('/produtos/novo', function (req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos/novo', function (req, res) {
        var produto = req.body;
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function (err, results) {
            res.redirect('/produtos');
        });
        connection.end();
    })
};
