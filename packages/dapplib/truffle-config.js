require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food grief rebel machine minor impulse light army gate'; 
let testAccounts = [
"0x91055f50e957a6803b579119cd9962b5e7de41d237549b4475abcd08e2025325",
"0x6220bb7461c6efb5c8f2724ebfb12bbfcebb19abb356ac4dcf0ff4b3cbe4ff7d",
"0xb6978ca66b1163b25f492b4506a87f135ca575f702a13f332304bb18e31f7871",
"0xf531c5516106b4962899fdeef389e4dfea0d9efc32d6e81d03fc3521dd4706a1",
"0xba576c66b0511fe4141d272012323ec27e9889ff0c3f9af1d791280b4268a731",
"0xb2010067618da2630a42193ccf4f90e4c8189cbc87236d30068c33b7a5c17627",
"0xff54fac2d8676b2dc3a17c46c2740a0de569605374f8b5038c5e51e95695151e",
"0x619cd146c6b8d7c0f43e97df3c7cc58e390f0fabcf36d9b300e7258c3bb4f71b",
"0x14809d7c96f4a50eb1e9cfc33f26e20bec4b521f9b54600a2ef1290b344a937f",
"0x00abb9524c97a75d8f29bc0df4827e10e14d4bd8a367aa67f095e579a10af1d5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


