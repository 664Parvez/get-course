export default function course (req, res) {
    res.status(200).json(
        [
            {
                "id" : 1,
                "img": "/home-course/course-01.jpg",
                "courseName" : "React JS",
                "slug": "react-js",
                "rating" : 5,
                "reviews" : 14,
                "lessons" : 20,
                "students": 10,
                "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo nostrum quod minima repellendus quisquam eos omnis doloremque nesciunt atque.",
                "newPrice": 200,
                "oldPrice": 357,
                "mentor" : "Alex Joe"
            },
            {
                "id" : 2,
                "img": "/home-course/course-02.jpg",
                "courseName" : "Node + MongoDB",
                "slug": "node-mongodb",
                "rating" : 5,
                "reviews" : 10,
                "lessons" : 10,
                "students": 14,
                "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo nostrum quod minima repellendus quisquam eos omnis doloremque nesciunt atque.",
                "newPrice": 240,
                "oldPrice": 350,
                "mentor" : "Alexender"
            },
            {
                "id" : 3,
                "img": "/home-course/course-03.jpg",
                "courseName" : "PHP for Backend",
                "slug": "php-for-backend",
                "rating" : 5,
                "reviews" : 5,
                "lessons" : 20,
                "students": 8,
                "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo nostrum quod minima repellendus quisquam eos omnis doloremque nesciunt atque.",
                "newPrice": 100,
                "oldPrice": 200,
                "mentor" : "Piter Peat"
            },
            {
                "id" : 4,
                "img": "/home-course/course-02.jpg",
                "courseName" : "HTML, CSS Basic",
                "slug": "html-css-basic",
                "rating" : 5,
                "reviews" : 5,
                "lessons" : 20,
                "students": 8,
                "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo nostrum quod minima repellendus quisquam eos omnis doloremque nesciunt atque.",
                "newPrice": 130,
                "oldPrice": 230,
                "mentor" : "John Doe"
            },
            {
                "id" : 5,
                "img": "/home-course/course-01.jpg",
                "courseName" : "Next JS 13 Tutorial",
                "slug": "next-js-13-tutorial",
                "rating" : 5,
                "reviews" : 5,
                "lessons" : 20,
                "students": 8,
                "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo nostrum quod minima repellendus quisquam eos omnis doloremque nesciunt atque.",
                "newPrice": 200,
                "oldPrice": 250,
                "mentor" : "David John"
            },
            {
                "id" : 6,
                "img": "/home-course/course-03.jpg",
                "courseName" : "Laravel and mySql",
                "slug": "laravel-and-mysql",
                "rating" : 5,
                "reviews" : 5,
                "lessons" : 20,
                "students": 8,
                "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo nostrum quod minima repellendus quisquam eos omnis doloremque nesciunt atque.",
                "newPrice": 100,
                "oldPrice": 200,
                "mentor" : "Piter Peat"
            },
        ]
    )
}