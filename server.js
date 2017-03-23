var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles= {
    'article-one': {
    title:'Article One | IMAD',
    heading:'ARTICLE ONE',
    link:`
        <a href="/">HomePage</a>
        <a href="/article-two">Article 2</a>
            `,
    content: `
            <p>Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article.</p>
            <p>Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article.</p>
            <p>Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article.</p>
            <p>Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article. Content for first Article.</p>`
    },
    'article-two':{
        title:'Article Two | IMAD',
        heading:'ARTICLE TWO',
        link:`
            <a href="/article-one">go to Article 1</a>
            <a href="/article-three">go to Article 3</a>
                `,
        content: `
                <p>Content for Second Article.</p>`
    },
    'article-three':{
        title:'Article Three | IMAD',
        heading:'ARTICLE THREE',
        link:`
            <a href="/article-two">go to Article 2</a>
            <a href="/">HomePage</a>
                `,
        content: `
                <p>Content for Third Article.</p>`
    },
};
function createtemp(data){
    var title=data.title;
    var heading=data.heading;
    var link=data.link;
    var content=data.content;
    var htmltemp=`
    <html>
        <head>
            <title>${title}</title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <h1 align="center">${heading}</h1>
            <br>
            <div class="link">
               ${link}
            </div>
            <hr/>
            <div class="para">
                ${content}
            </div>    
        </body>
    </html>
    `;
    return htmltemp;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createtemp(articles[articleName]));
});

var counter=0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logo.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
