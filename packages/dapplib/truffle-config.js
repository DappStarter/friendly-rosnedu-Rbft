require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind evil inflict industry flip turn'; 
let testAccounts = [
"0xc257188a382721accfd6d8e31ed53a32f84a391e5d94d6b2616b957543e16d95",
"0xa2b775e85bd97404d77e93204b12f853d7a7e59ad73ef52484c54ab0ae87bb90",
"0xc02a962284b69b29e6499efec11c36f17f29f1b49c382fe320c8b7aa679ff4a6",
"0x6ebd11dcf43233226fc18fc14b27580c78e4abe67a7b780ce2e3d1f75c27e8f0",
"0x39c1c1b79df262c123737cf589e1698b966f29e02519203d772836a280d39a9d",
"0x09b804e169934c27c70390c0db56a5ef7746279fd0ec274b0aa88ac16c085e3e",
"0xc6dd02a11c7324e4d950b80b193dc92a562df94b5c2059afef292edaa6e036e0",
"0xd80e305dbbfe8ec4a614bc8a7aedf11e12e45a493adc8270db0d8f06a9aa6b36",
"0xf2e31fb13eb1c132233002ebd34d4adb7bdf60fd6c40aff06d27e225c3cae09b",
"0x45c667afbabbffca6b67ca5d729393bfd0ed56171b354a9f70b00ddfbab3412d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

