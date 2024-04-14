const express = require('express');
const oracle = require('oracledb')
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

async function ConnectDB(){
  console.log("hii")
  try{
    const con = await oracle.getConnection({
      user : "HR",
      password : "123",
      connectionString : "localhost/orcl"
    })
 console.log("Logged into database")
    return con
  }
  catch(err){
console.log(err)
  }


}






app.post("/admin_login",async (req,res)=>{

        const {name,password} = req.body
        const dataToInsert = {
          aid: 1,
          aname: 'manideepa',
          apass: 'mani@123'
        };
      
        
        try {
          // Establish a connection to the database
          const connection = await ConnectDB();
        
          // SQL query to select data from the table
          const sql = `SELECT * FROM HR.Admin`;
        
          // Execute the SQL query
          const result = await connection.execute(sql);
        
          // Extract the rows from the result object
          const rows = result.rows;
        
          // Log or process the retrieved data
          console.log(rows);
        
          // Send the retrieved data in the response
          res.status(200).json({ data: rows });
        } catch (error) {
          console.error('Error fetching data:', error);
          // If an error occurs, send an error response with a more informative message
          res.status(500).json({ message: 'An error occurred while fetching data' });
        }
})





const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
