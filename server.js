const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin").router;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// เรียกใช้ Router
app.use("/", shopRouter);
app.use("/admin", adminRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404page.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("Press CTRL+C to stop");
});
