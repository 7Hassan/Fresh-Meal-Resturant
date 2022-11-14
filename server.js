
const express = require('express')
const path = require("path")
const publicDir = path.join(__dirname, "./public");
const app = express()
const port = 8000

app.use(express.static(publicDir));
app.set("view engine", "hbs");



app.use("/", require("./routes/pages"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})