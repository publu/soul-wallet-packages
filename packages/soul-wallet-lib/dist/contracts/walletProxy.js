"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-11-04 23:45:24
 * @LastEditors: cejay
 * @LastEditTime: 2022-11-05 00:06:54
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletProxyContract = void 0;
const ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "logic",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];
const bytecode = '0x60806040526040516102ae3803806102ae833981016040819052610022916100f2565b61002c8282610033565b50506101db565b61003c82610054565b61005082826100b060201b6100421760201c565b5050565b61007c817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6001600160a01b038116807fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a25050565b813b6100bb57600080fd5b600080825160208401855af4806100d7573d806000803e806000fd5b505050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561010557600080fd5b82516001600160a01b038116811461011c57600080fd5b602084810151919350906001600160401b038082111561013b57600080fd5b818601915086601f83011261014f57600080fd5b815181811115610161576101616100dc565b604051601f8201601f19908116603f01168101908382118183101715610189576101896100dc565b8160405282815289868487010111156101a157600080fd5b600093505b828410156101c357848401860151818501870152928501926101a6565b60008684830101528096505050505050509250929050565b60c5806101e96000396000f3fe608060405236601057600e6013565b005b600e5b6040603c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b606c565b565b813b604c57600080fd5b600080825160208401855af4806067573d806000803e806000fd5b505050565b3660008037600080366000845af43d6000803e808015608a573d6000f35b3d6000fdfea2646970667358221220410c1df3e5f5f0fc3637b7c7eb03f779bd0ad3c805e348d34aac6990db8c710164736f6c63430008110033';
const contract = {
    ABI,
    bytecode
};
exports.WalletProxyContract = contract;
//# sourceMappingURL=walletProxy.js.map