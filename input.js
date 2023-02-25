// setup interface to handle user input from stdin
let connection;

const setUpInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "w") {
      conn.write("Move: up");
    }
    if (key === "a") {
      conn.write("Move: left");
    }
    if (key === "s") {
      conn.write("Move: down");
    }
    if (key === "d") {
      conn.write("Move: right");
    }
    if (key === "x") {
      conn.write("Say: GL!");
    }
    if (key === "z") {
      conn.write("Say: Catch up!");
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setUpInput;
