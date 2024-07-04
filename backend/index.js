import express from 'express'
import mysql from 'mysql2'

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root.Mysql.1',
    database: 'wheelbase',
})

app.use(express.json())

app.get('/', (req, res) => {
    res.json("Yello this is the backend server👍👍")
})

app.get('/automaker', (req, res) => {
    const q = 'SELECT * FROM automaker'
    db.query(q, (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})

app.post('/automaker', (req, res) => {
    const q = 'INSERT INTO automaker (name, logo_url, description, website_url) VALUES (?)'
    const values = [
        req.body.name,
        req.body.logo_url,
        req.body.description,
        req.body.website_url
    ]

    db.query(q, [values], (err, result) => {
        if (err) return res.json(err)
        return res.json("Automaker created successfully!")
    })
})



app.listen(8800, () => {
    console.log('Backend server is running! Connected to backend! 👍');
})



