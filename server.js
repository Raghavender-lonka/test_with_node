require("newrelic")

const express = require("express")

const cors = require("cors")

const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.json([
    {
      id: "001",
      name: "L Raghavender Reddy",
      role: "DevOps Engineer",
    },
  ])
})

app.listen(8080, () => {
  console.log("listning from port 8080")
})
