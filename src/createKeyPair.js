const fs = require("fs");
const anchor = require("@project-serum/anchor");

const account = anchor.web3.Keypair.generate();
// write the keypair generated directly to the fileSystem
fs.writeFileSync("./keypair.json", JSON.stringify(account));
