// // const express = require("express")
// import express from "express"// use this when using type module
// import dotenv from "dotenv" 
// import cookieParser from "cookie-parser"
// import { connectDB } from "./lib/db.js"
// import cors from "cors"

// import{app,server} from "./lib/socket.js"

// import authRoutes from "./routes/auth.route.js"
// import messageRoutes from "./routes/message.route.js"

// import path from "path"
// // import { Buffer } from 'buffer';

// dotenv.config()

// // const app=express();

// const __dirname=path.resolve

// app.use(express.json({ limit: '10mb' }));  // Allow 10MB for JSON bodies
// app.use(express.urlencoded({ limit: '10mb', extended: true }));  // Allow 10MB for URL-encoded bodies


// app.use(express.json())
// app.use(cookieParser())
// app.use(cors({
// origin:"http://localhost:5173",
// credentials:true
// }
// ))


// const PORT=process.env.PORT
// app.use("/api/auth",authRoutes)
// app.use("/api/messages",messageRoutes)


// if(process.env.NODE_ENV==="production")
// {
//     app.use(express.static(path.join(__dirname,"../frontend/dist")));

//     app.get("*",(req,res)=>
//     {
//         res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))

//     }
//     )
// }

// server.listen(PORT,()=>{
// console.log("Server is running at port 5001 , you are doing right");
// connectDB();
// });

// // app.listen(PORT,()=>{
// //     console.log("Server is running at port 5001 , you are doing right");
// //     connectDB();
// //     });





// import express from "express"; // Use this when using type module
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import { connectDB } from "./lib/db.js";
// import cors from "cors";

// import { app, server } from "./lib/socket.js";

// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";

// import path from "path";
// import { fileURLToPath } from "url";

// // Set up environment variables
// dotenv.config();

// // Fix __dirname for ES modules
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// // Middleware setup
// app.use(express.json({ limit: "10mb" })); // Allow 10MB for JSON bodies
// app.use(express.urlencoded({ limit: "10mb", extended: true })); // Allow 10MB for URL-encoded bodies
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// // Routes
// const PORT = process.env.PORT || 5001;
// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);





// // Production build setup
// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static(path.join(__dirname, "../frontend/dist")));

// //   app.get("*", (req, res) => {
// //     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
// //   });
// // }



// // if (process.env.NODE_ENV === "production") {
// //     // Serve static files from the 'assets' folder
// //     app.use(express.static(path.join(__dirname, "../frontend/dist/assets")));
  
// //     // Serve the index.html file for all other routes
// //     app.get("*", (req, res) => {
// //       res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
// //     });
// //   }
  

// if (process.env.NODE_ENV === "production") {
//     const distFolderPath = path.join(__dirname, "../frontend/dist");
  
//     // Serve static files from the 'assets' folder
//     app.use(express.static(path.join(distFolderPath, "assets")));
  
//     // Serve the index.html file for all other routes
//     app.get("*", (req, res) => {
//       res.sendFile(path.join(distFolderPath, "index.html"));
//     });
//   }
  

// // Start the server
// server.listen(PORT, () => {
//   console.log(`Server is running at port ${PORT}, you are doing great!`);
//   connectDB();
// });


import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);




app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.use(express.json({ limit: "10mb" })); // Allow 10MB for JSON bodies
app.use(express.urlencoded({ limit: "10mb", extended: true })); // Allow 10MB for URL-encoded bodies


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});