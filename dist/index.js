class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "202020202", "", "Hello", 12345);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map