export default function blog (req, res) {

    const time = new Date().toLocaleTimeString()
    const date = new Date().toLocaleDateString()

    res.status(200).json([
        {
            "img" : "/blogImg/Python.jpg",
            "title" : "Blog One",
            "slug" : "blog-one",
            "descrip" : "Placeholder text commonly used to demonstrate the visual form of a document In publishing and graphic design, Lorem ipsum is a or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
            "time" : time,
            "date" : date
        },
        {
            "img" : "/blogImg/Reactjs.jpg",
            "title" : "Blog Two",
            "slug" : "blog-two",
            "descrip" : "Relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.",
            "time" : time,
            "date" : date
        },
        {
            "img" : "/blogImg/javascript.png",
            "title" : "Blog Three",
            "slug" : "blog-three",
            "descrip" : "In or a typeface without relying on meaningful content. publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document Lorem ipsum may be used as a placeholder before final copy is available.",
            "time" : time,
            "date" : date
        },
        {
            "img" : "/blogImg/Illustrator.png",
            "title" : "Blog Four",
            "slug" : "blog-four",
            "descrip" : "In publishing and graphic design, Lorem ipsum is relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.",
            "time" : time,
            "date" : date
        },
    ])
}