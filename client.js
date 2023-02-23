const net = require("net");

const connectionSuccess = function() {
  console.log("Successfully connected to game server");
}

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  conn.on("connect", () => {
    connectionSuccess();
    conn.write("Name: SB");
    conn.write("Say: GL!")
    conn.write("Say: Catch up!")
  });

  return conn;
};


module.exports = connect;