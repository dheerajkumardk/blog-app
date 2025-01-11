import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

const post1 = {
    title: "My First Blog",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
const post2 = {
    title: "My Second Blog",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
const post3 = {
    title: "My Third Blog",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
const listOfArticles = [
    post1, post2, post3
];

// routes
// homepage - list of all blogs
app.get(["/", "/blogs"], (req, res) => {
    res.render("index.ejs", {
        listOfArticles
    });
});

// Form to create a new blog
app.get("/blogs/new", (req, res) => {
    res.render("create.ejs");
});

// Submit blog
app.post("/blogs", (req, res) => {
    const {title, content} = req.body;
    listOfArticles.push({title, content});

    res.render("index.ejs", {
        listOfArticles
    });
});

app.get("/blogs/:id/view", (req, res) => {
    res.render("view.ejs", {
        blog: listOfArticles[req.params.id],
    });
});

// Form to edit the blog
app.get("/blogs/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        id: req.params.id,
        blog: listOfArticles[req.params.id]
    });
});

// Submit the updated content
app.post("/blogs/:id/edit", (req, res) => {
    const {title, content} = req.body;
    const id = req.params.id;
    listOfArticles[id]= {title, content};

    res.render("index.ejs", {
        listOfArticles
    })
});

app.get("/blogs/:id/delete", (req, res) => {
    // delete the blog from the list
    let index = req.params.id;
    listOfArticles.splice(index, 1);

    res.render("index.ejs", {
        listOfArticles
    });
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});