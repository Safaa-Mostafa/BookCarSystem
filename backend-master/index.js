const PORT = process.env.PORT || 42900
const app = require("./app/src")
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))


