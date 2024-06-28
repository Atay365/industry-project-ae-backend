// import express from "express";
// import { exec } from "child_process";
// import { spawn } from "child_process";

// const pyRouter = express.Router();

// const executePython = async (script, args) => {
//   const argument = args.map((arg) => arg.toString());

//   const py = spawn("python", [script, ...argument]);

//   const result = await new Promise((resolve, reject) => {
//     let output;

//     py.stdout.on("data", (data) => {
//       output = JSON.parse(data);
//     });

//     py.stderr.on("data", (data) => {
//       console.error(`[python] Error occured: ${data}`);
//       reject(`Error occured in ${script}`);
//     });

//     py.on("exit", (code) => {
//       console.log(`Child process exited with code ${code}`);
//       resolve(output);
//     });
//   });

//   return result;
// };

// router.post("/", async (req, res) => {});

// router.get("/", async (req, res) => {
//   try {
//     const result = await executePython("./pymodel.js");
//     res.json({ result: result });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// export default pyRouter;
