import express, { Request, Response } from "express";
import bookRoutes from "./routes/book-routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", bookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Node.js + TypeScript API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});