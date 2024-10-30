const express = require('express');
const app = express();
const cors=require('cors');


const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com"
    },
    {
        id: 3,
        name: "Michael Johnson",
        email: "michael.johnson@example.com"
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily.davis@example.com"
    },
    {
        id: 5,
        name: "Robert Brown",
        email: "robert.brown@example.com"
    }
];



app.get('/', (req, res) => {
    res.send("User Management server is running");
})


app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users',(req,res)=>{
    console.log("Post is hitting");
    console.log(req.body);
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})