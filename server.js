
const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"bim2nhtxtiqpusox1bn5-mysql.services.clever-cloud.com",
    user:"upk0ewofedwvt9bg",
    password:"YmMIzHgAFtElxgXfUUkQ",
    database:"bim2nhtxtiqpusox1bn5"
})


app.post('/signup',(req,res)=>{
    const sql="INSERT INTO login (`name`,`email`,`age`,`batch`) VALUES (?)";

    const values=[
        req.body.name,
        req.body.email,
        req.body.age,
        req.body.batch
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("listening");
})