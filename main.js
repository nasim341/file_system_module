var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {

    if (req.url == '/') {
        // /*ReadFile Asynchronus*/
        fs.readFile('index.html', function(error, data) {

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                }
                /*ReadFile Synchronus*/
                var module = fs.readFileSync('index.html'); res.writeHead(200, { 'Content-Type': 'text/html' }); res.write(module); res.end();
            }
            /*WriteFile Asynchronus*/
        fs.writeFile('demo.txt', 'hello', function(error) {
            if (error) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('Run Error');
                res.end();
            } else {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write('Run success');
                res.end();
            }
        });
        /*WriteFile Synchronus*/
        var error = fs.writeFileSync('demosync.txt', 'welcome');
        if (error) {
            res.writeFile(200, { 'Coontent-Type': 'text/html' });
            res.write('Project run error');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('project run success');
            res.end();
        }
        /*Rename Asynchronus*/
        fs.rename('demo.txt', 'deomNew.txt', function(error) {
                if (error) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('Project rename error');
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('project renmae successful');
                    res.end();
                }
            })
            /*Rename Synchronus*/
        var result = fs.renameSync('demosync.txt', 'renameSyn.txt');
        if (result) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Project rename error');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Project rename successful');
            res.end();
        }
        /*Delete ASynchronus*/
        fs.unlink('renameSyn.txt', function(error) {
                if (error) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('Project delete error');
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('Proejectb delete successful');
                    res.end();
                }
            })
            /*Delete Synchronus*/
        var error = fs.unlink('renameSyn.txt')
        if (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Project delete error');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Proejectb delete successful');
            res.end();
        }
        /*Fs file  Exits Synchronus*/
        var result = fs.existsSync('main.js');
        if (result) {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write('true');
            res.end();
        } else {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write('false');
            res.end();
        }
        /*Fs file  Exits Async*/
        fs.exists('main.js', function(error) {
            if (error) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('Ture');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('False');
                res.end();
            }
        })
    }
});

server.listen(400);
console.log('Run success');