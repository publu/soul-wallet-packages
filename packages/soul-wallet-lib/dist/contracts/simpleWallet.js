"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-08-05 21:13:10
 * @LastEditors: cejay
 * @LastEditTime: 2022-09-29 17:53:28
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleWalletContract = void 0;
const ABI = [
    {
        "inputs": [
            {
                "internalType": "contract EntryPoint",
                "name": "anEntryPoint",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "anOwner",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "paymaster",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "oldEntryPoint",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newEntryPoint",
                "type": "address"
            }
        ],
        "name": "EntryPointChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "enum SmartWallet.PendingRequestType",
                "name": "pendingRequestType",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "effectiveAt",
                "type": "uint256"
            }
        ],
        "name": "PendingRequestEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "GUARDIAN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "OWNER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "addDeposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "deleteGuardianRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "entryPoint",
        "outputs": [
            {
                "internalType": "contract EntryPoint",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "dest",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "func",
                "type": "bytes"
            }
        ],
        "name": "exec",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "dest",
                "type": "address[]"
            },
            {
                "internalType": "bytes[]",
                "name": "func",
                "type": "bytes[]"
            }
        ],
        "name": "execBatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "dest",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "func",
                "type": "bytes"
            }
        ],
        "name": "execFromEntryPoint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDeposit",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getGuardian",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getGuardiansCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMinGuardiansSignatures",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOwnersCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getRoleMember",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleMemberCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantGuardianConfirmation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantGuardianRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "guardianDelay",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isGuardian",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isOwner",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "isValidSignature",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nonce",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "pendingGuardian",
        "outputs": [
            {
                "internalType": "enum SmartWallet.PendingRequestType",
                "name": "pendingRequestType",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "effectiveAt",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeGuardianConfirmation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeGuardianRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "dest",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "transferOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newEntryPoint",
                "type": "address"
            }
        ],
        "name": "updateEntryPoint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nonce",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "initCode",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "callData",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "callGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "verificationGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "preVerificationGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxFeePerGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxPriorityFeePerGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "paymaster",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes",
                        "name": "paymasterData",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct UserOperation",
                "name": "userOp",
                "type": "tuple"
            },
            {
                "internalType": "bytes32",
                "name": "requestId",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "missingWalletFunds",
                "type": "uint256"
            }
        ],
        "name": "validateUserOp",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "withdrawAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawDepositTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];
const bytecode = '0x608060405260786003553480156200001657600080fd5b50604051620032cf380380620032cf833981016040819052620000399162000372565b600480546001600160a01b038087166c01000000000000000000000000026001600160601b03909216919091179091558316620000bc5760405162461bcd60e51b815260206004820152601960248201527f41434c3a204f776e65722063616e6e6f74206265207a65726f00000000000000604482015260640160405180910390fd5b620000d7600080516020620032af83398151915280620001b8565b620000f2600080516020620032af8339815191528462000203565b6200012d7f55435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a5041600080516020620032af833981519152620001b8565b60405163095ea7b360e01b81526001600160a01b038281166004830152600019602483015283169063095ea7b3906044016020604051808303816000875af11580156200017e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a49190620003da565b620001ae57600080fd5b5050505062000405565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6200021a82826200024660201b6200134b1760201c565b600082815260016020908152604090912062000241918390620013cf620002e7821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620002e3576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002a23390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000620002fe836001600160a01b03841662000307565b90505b92915050565b6000818152600183016020526040812054620003505750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000301565b50600062000301565b6001600160a01b03811681146200036f57600080fd5b50565b600080600080608085870312156200038957600080fd5b8451620003968162000359565b6020860151909450620003a98162000359565b6040860151909350620003bc8162000359565b6060860151909250620003cf8162000359565b939692955090935050565b600060208284031215620003ed57600080fd5b81518015158114620003fe57600080fd5b9392505050565b612e9a80620004156000396000f3fe6080604052600436106102295760003560e01c806380c5c7d011610123578063b18c2420116100ab578063d0cb75fa1161006f578063d0cb75fa1461067f578063d547741f1461069f578063e58378bb146106bf578063e6268114146106e1578063fcbac1f41461070157600080fd5b8063b18c2420146105f5578063c399ec881461060a578063c41a360a1461061f578063c8a5b98e1461063f578063ca15c8731461065f57600080fd5b8063a217fddf116100f2578063a217fddf1461056d578063a9059cbb14610582578063aaf9bbd6146105a2578063affed0e0146105c2578063b0d691fe146105e057600080fd5b806380c5c7d0146104ed578063891dc4301461050d5780639010d07c1461052d57806391d148541461054d57600080fd5b80632f54bf6e116101b15780634cc499d7116101755780634cc499d7146104405780634d44560d146104785780634fb2e45d1461049857806373ff81cc146104b857806379f2d7c3146104cd57600080fd5b80632f54bf6e1461039b57806336568abe146103bb578063370c3089146103db5780633b0a6875146103f05780634a58db191461043857600080fd5b80631626ba7e116101f85780631626ba7e146102d05780631b71bb6e14610309578063248a9ca31461032957806324ea54f4146103595780632f2ff15d1461037b57600080fd5b806301ffc9a7146102355780630565bb671461026a5780630c68ba211461028c578063140d075a146102ac57600080fd5b3661023057005b600080fd5b34801561024157600080fd5b50610255610250366004612605565b610721565b60405190151581526020015b60405180910390f35b34801561027657600080fd5b5061028a610285366004612644565b61074c565b005b34801561029857600080fd5b506102556102a73660046126cd565b61079b565b3480156102b857600080fd5b506102c260035481565b604051908152602001610261565b3480156102dc57600080fd5b506102f06102eb366004612782565b6107b5565b6040516001600160e01b03199091168152602001610261565b34801561031557600080fd5b5061028a6103243660046126cd565b61081d565b34801561033557600080fd5b506102c261034436600461280c565b60009081526020819052604090206001015490565b34801561036557600080fd5b506102c2600080516020612e4583398151915281565b34801561038757600080fd5b5061028a610396366004612825565b610831565b3480156103a757600080fd5b506102556103b63660046126cd565b61085b565b3480156103c757600080fd5b5061028a6103d6366004612825565b610875565b3480156103e757600080fd5b506102c26108f3565b3480156103fc57600080fd5b5061042a61040b3660046126cd565b6002602052600090815260409020805460019091015460ff9091169082565b60405161026192919061286b565b61028a610911565b34801561044c57600080fd5b5061046061045b36600461280c565b610978565b6040516001600160a01b039091168152602001610261565b34801561048457600080fd5b5061028a610493366004612897565b610992565b3480156104a457600080fd5b5061028a6104b33660046126cd565b610a0a565b3480156104c457600080fd5b506102c2610ae0565b3480156104d957600080fd5b5061028a6104e83660046126cd565b610af9565b3480156104f957600080fd5b5061028a610508366004612644565b610c46565b34801561051957600080fd5b5061028a6105283660046126cd565b610c7e565b34801561053957600080fd5b506104606105483660046128c3565b610deb565b34801561055957600080fd5b50610255610568366004612825565b610e0a565b34801561057957600080fd5b506102c2600081565b34801561058e57600080fd5b5061028a61059d366004612897565b610e33565b3480156105ae57600080fd5b5061028a6105bd3660046126cd565b610e71565b3480156105ce57600080fd5b506004546001600160601b03166102c2565b3480156105ec57600080fd5b50610460610f25565b34801561060157600080fd5b506102c2610f3b565b34801561061657600080fd5b506102c2610f4f565b34801561062b57600080fd5b5061046061063a36600461280c565b610fc3565b34801561064b57600080fd5b5061028a61065a3660046126cd565b610fdd565b34801561066b57600080fd5b506102c261067a36600461280c565b6110db565b34801561068b57600080fd5b5061028a61069a36600461292a565b6110f2565b3480156106ab57600080fd5b5061028a6106ba366004612825565b6111ed565b3480156106cb57600080fd5b506102c2600080516020612e2583398151915281565b3480156106ed57600080fd5b5061028a6106fc3660046126cd565b611212565b34801561070d57600080fd5b5061028a61071c366004612996565b611311565b60006001600160e01b03198216635a05180f60e01b14806107465750610746826113e4565b92915050565b610754611419565b610795848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061147692505050565b50505050565b6000610746600080516020612e4583398151915283610e0a565b60006107c46103b684846114e6565b61080e5760405162461bcd60e51b815260206004820152601660248201527541434c3a20496e76616c6964207369676e617475726560501b60448201526064015b60405180910390fd5b50630b135d3f60e11b92915050565b61082561150a565b61082e81611512565b50565b60008281526020819052604090206001015461084c8161157b565b6108568383611585565b505050565b6000610746600080516020612e2583398151915283610e0a565b6001600160a01b03811633146108e55760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610805565b6108ef82826115a7565b5050565b600061090c600080516020612e458339815191526110db565b905090565b600061091b610f25565b6001600160a01b03163460405160006040518083038185875af1925050503d8060008114610965576040519150601f19603f3d011682016040523d82523d6000602084013e61096a565b606091505b505090508061082e57600080fd5b6000610746600080516020612e4583398151915283610deb565b61099a611419565b6109a2610f25565b60405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156109ee57600080fd5b505af1158015610a02573d6000803e3d6000fd5b505050505050565b610a12610f25565b6001600160a01b0316336001600160a01b031614610a425760405162461bcd60e51b8152600401610805906129ea565b6001600160a01b038116610a985760405162461bcd60e51b815260206004820152601960248201527f41434c3a204f776e65722063616e6e6f74206265207a65726f000000000000006044820152606401610805565b610ac8600080516020612e25833981519152610ac3600080516020612e258339815191526000610deb565b6115a7565b61082e600080516020612e2583398151915282611585565b600061090c600080516020612e258339815191526110db565b610b01610f25565b6001600160a01b0316336001600160a01b031614610b315760405162461bcd60e51b8152600401610805906129ea565b610b3a8161085b565b15610b875760405162461bcd60e51b815260206004820152601d60248201527f41434c3a204f776e65722063616e6e6f7420626520677561726469616e0000006044820152606401610805565b600060035442610b979190612a37565b604080518082018252600180825260208083018590526001600160a01b0387166000908152600291829052939093208251815495965092949093849260ff1990921691908490811115610bec57610bec612855565b0217905550602091909101516001918201555b826001600160a01b03167f1d48b67e05d67e03248ab2d9cec0c742d42363adbc05c97aa861c18fbf10485d83604051610c3a91815260200190565b60405180910390a35050565b610c4e610f25565b6001600160a01b0316336001600160a01b0316146107545760405162461bcd60e51b8152600401610805906129ea565b610c878161085b565b15610cd45760405162461bcd60e51b815260206004820152601d60248201527f41434c3a204f776e65722063616e6e6f7420626520677561726469616e0000006044820152606401610805565b60016001600160a01b03821660009081526002602081905260409091205460ff1690811115610d0557610d05612855565b14610d525760405162461bcd60e51b815260206004820152601e60248201527f61646420677561726469616e2072657175657374206e6f7420657869737400006044820152606401610805565b6001600160a01b0381166000908152600260205260409020600101544211610db25760405162461bcd60e51b815260206004820152601360248201527274696d652064656c6179206e6f74207061737360681b6044820152606401610805565b610dca600080516020612e4583398151915282611585565b6001600160a01b03166000908152600260205260409020805460ff19169055565b6000828152600160205260408120610e0390836115c9565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b610e3b611419565b6040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610856573d6000803e3d6000fd5b610e79610f25565b6001600160a01b0316336001600160a01b031614610ea95760405162461bcd60e51b8152600401610805906129ea565b600060035442610eb99190612a37565b604080518082018252600280825260208083018590526001600160a01b038716600090815290829052929092208151815494955091939092839160ff1916906001908490811115610f0c57610f0c612855565b0217905550602091909101516001909101556002610bff565b600454600160601b90046001600160a01b031690565b600061090c610f486108f3565b60026115d5565b6000610f59610f25565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa158015610f9f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090c9190612a4a565b6000610746600080516020612e2583398151915283610deb565b6001600160a01b03811660009081526002602081905260409091205460ff168181111561100c5761100c612855565b146110635760405162461bcd60e51b815260206004820152602160248201527f7265766f6b6520677561726469616e2072657175657374206e6f7420657869736044820152601d60fa1b6064820152608401610805565b6001600160a01b03811660009081526002602052604090206001015442116110c35760405162461bcd60e51b815260206004820152601360248201527274696d652064656c6179206e6f74207061737360681b6044820152606401610805565b610dca600080516020612e45833981519152826115a7565b60008181526001602052604081206107469061160c565b6110fa611419565b82811461113f5760405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b6044820152606401610805565b60005b838110156111e6576111d485858381811061115f5761115f612a63565b905060200201602081019061117491906126cd565b600085858581811061118857611188612a63565b905060200281019061119a9190612a79565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061147692505050565b806111de81612ac0565b915050611142565b5050505050565b6000828152602081905260409020600101546112088161157b565b61085683836115a7565b61121a610f25565b6001600160a01b0316336001600160a01b03161461124a5760405162461bcd60e51b8152600401610805906129ea565b6001600160a01b038116600090815260026020819052604082205460ff169081111561127857611278612855565b036112b95760405162461bcd60e51b81526020600482015260116024820152701c995c5d595cdd081b9bdd08195e1a5cdd607a1b6044820152606401610805565b6001600160a01b0381166000818152600260209081526040808320805460ff19169055518281529192917f1d48b67e05d67e03248ab2d9cec0c742d42363adbc05c97aa861c18fbf10485d910160405180910390a350565b611319611616565b611323838361164e565b6113306040840184612a79565b9050600003611342576113428361168a565b6108568161171d565b6113558282610e0a565b6108ef576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905561138b3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610e03836001600160a01b03841661176a565b60006001600160e01b03198216637965db0b60e01b148061074657506301ffc9a760e01b6001600160e01b0319831614610746565b611431600080516020612e2583398151915233610e0a565b8061143b57503330145b6114745760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b6044820152606401610805565b565b600080846001600160a01b031684846040516114929190612afd565b60006040518083038185875af1925050503d80600081146114cf576040519150601f19603f3d011682016040523d82523d6000602084013e6114d4565b606091505b5091509150816111e657805160208201fd5b60008060006114f585856117b9565b9150915061150281611827565b509392505050565b611474611419565b6004546040516001600160a01b0380841692600160601b900416907f450909c1478d09248269d4ad4fa8cba61ca3f50faed58c7aedefa51c7f62b83a90600090a3600480546001600160a01b03909216600160601b026001600160601b03909216919091179055565b61082e81336119dd565b61158f828261134b565b600082815260016020526040902061085690826113cf565b6115b18282611a41565b60008281526001602052604090206108569082611aa6565b6000610e038383611abb565b6000821561160357816115e9600185612b19565b6115f39190612b2c565b6115fe906001612a37565b610e03565b50600092915050565b6000610746825490565b61161e610f25565b6001600160a01b0316336001600160a01b0316146114745760405162461bcd60e51b8152600401610805906129ea565b600061165983611ae5565b905060008151600181111561167057611670612855565b1461168057610856818484611b45565b6108568183611d1c565b600480546020830135916001600160601b039091169060006116ab83612b4e565b91906101000a8154816001600160601b0302191690836001600160601b031602179055506001600160601b03161461082e5760405162461bcd60e51b815260206004820152601560248201527477616c6c65743a20696e76616c6964206e6f6e636560581b6044820152606401610805565b801561082e57604051600090339060001990849084818181858888f193505050503d80600081146111e6576040519150601f19603f3d011682016040523d82523d6000602084013e6111e6565b60008181526001830160205260408120546117b157508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610746565b506000610746565b60008082516041036117ef5760208301516040840151606085015160001a6117e387828585611d5a565b94509450505050611820565b8251604003611818576020830151604084015161180d868383611e47565b935093505050611820565b506000905060025b9250929050565b600081600481111561183b5761183b612855565b036118435750565b600181600481111561185757611857612855565b036118a45760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610805565b60028160048111156118b8576118b8612855565b036119055760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610805565b600381600481111561191957611919612855565b036119715760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610805565b600481600481111561198557611985612855565b0361082e5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610805565b6119e78282610e0a565b6108ef576119ff816001600160a01b03166014611e80565b611a0a836020611e80565b604051602001611a1b929190612b74565b60408051601f198184030181529082905262461bcd60e51b825261080591600401612c15565b611a4b8282610e0a565b156108ef576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610e03836001600160a01b03841661201c565b6000826000018281548110611ad257611ad2612a63565b9060005260206000200154905092915050565b604080518082019091526000815260606020820152610746611b0b610160840184612a79565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061210f92505050565b6000611b4f6108f3565b11611b9c5760405162461bcd60e51b815260206004820152601c60248201527f57616c6c65743a204e6f20677561726469616e7320616c6c6f776564000000006044820152606401610805565b611ba58261216c565b611bf15760405162461bcd60e51b815260206004820152601f60248201527f57616c6c65743a20496e76616c696420677561726469616e20616374696f6e006044820152606401610805565b611bf9610f3b565b8360200151511015611c4d5760405162461bcd60e51b815260206004820152601e60248201527f57616c6c65743a20496e73756666696369656e7420677561726469616e7300006044820152606401610805565b600080805b856020015151811015610a0257600086602001518281518110611c7757611c77612a63565b60200260200101519050611c9c8160000151611c92876121d6565b8360200151612229565b805192506001600160a01b0380851690841611611d055760405162461bcd60e51b815260206004820152602160248201527f496e76616c696420677561726469616e20616464726573732070726f766964656044820152601960fa1b6064820152608401610805565b829350508080611d1490612ac0565b915050611c52565b60008260200151600081518110611d3557611d35612a63565b602002602001015190506108568160000151611d50846121d6565b83602001516122d5565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611d915750600090506003611e3e565b8460ff16601b14158015611da957508460ff16601c14155b15611dba5750600090506004611e3e565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611e0e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611e3757600060019250925050611e3e565b9150600090505b94509492505050565b6000806001600160ff1b03831681611e6460ff86901c601b612a37565b9050611e7287828885611d5a565b935093505050935093915050565b60606000611e8f836002612c28565b611e9a906002612a37565b67ffffffffffffffff811115611eb257611eb26126ea565b6040519080825280601f01601f191660200182016040528015611edc576020820181803683370190505b509050600360fc1b81600081518110611ef757611ef7612a63565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611f2657611f26612a63565b60200101906001600160f81b031916908160001a9053506000611f4a846002612c28565b611f55906001612a37565b90505b6001811115611fcd576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611f8957611f89612a63565b1a60f81b828281518110611f9f57611f9f612a63565b60200101906001600160f81b031916908160001a90535060049490941c93611fc681612c3f565b9050611f58565b508315610e035760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610805565b60008181526001830160205260408120548015612105576000612040600183612b19565b855490915060009061205490600190612b19565b90508181146120b957600086600001828154811061207457612074612a63565b906000526020600020015490508087600001848154811061209757612097612a63565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806120ca576120ca612c56565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610746565b6000915050610746565b6040805180820190915260008152606060208201526000808380602001905181019061213b9190612c6c565b91509150604051806040016040528083600181111561215c5761215c612855565b8152602001919091529392505050565b600061217b6060830183612a79565b905060000361218c57506000919050565b61074661219c6060840184612a79565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061237a92505050565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b61223483838361239e565b6122805760405162461bcd60e51b815260206004820152601960248201527f41434c3a20496e76616c696420677561726469616e20736967000000000000006044820152606401610805565b6122898361079b565b6108565760405162461bcd60e51b815260206004820152601a60248201527f41434c3a205369676e6572206e6f74206120677561726469616e0000000000006044820152606401610805565b6122e083838361239e565b6123255760405162461bcd60e51b815260206004820152601660248201527541434c3a20496e76616c6964206f776e65722073696760501b6044820152606401610805565b61232e8361085b565b6108565760405162461bcd60e51b815260206004820152601860248201527f41434c3a205369676e6572206e6f7420616e206f776e657200000000000000006044820152606401610805565b6000634fb2e45d60e01b61238d836124e0565b6001600160e01b0319161492915050565b60008060006123ad85856117b9565b909250905060008160048111156123c6576123c6612855565b1480156123e45750856001600160a01b0316826001600160a01b0316145b156123f457600192505050610e03565b600080876001600160a01b0316631626ba7e60e01b888860405160240161241c929190612dcc565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161245a9190612afd565b600060405180830381855afa9150503d8060008114612495576040519150601f19603f3d011682016040523d82523d6000602084013e61249a565b606091505b50915091508180156124ad575080516020145b80156124d457508051630b135d3f60e11b906124d29083016020908101908401612a4a565b145b98975050505050505050565b60006124ef82600060046124f8565b61074690612ded565b60608161250681601f612a37565b10156125455760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610805565b61254f8284612a37565b845110156125935760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610805565b6060821580156125b257604051915060008252602082016040526125fc565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156125eb5780518352602092830192016125d3565b5050858452601f01601f1916604052505b50949350505050565b60006020828403121561261757600080fd5b81356001600160e01b031981168114610e0357600080fd5b6001600160a01b038116811461082e57600080fd5b6000806000806060858703121561265a57600080fd5b84356126658161262f565b935060208501359250604085013567ffffffffffffffff8082111561268957600080fd5b818701915087601f83011261269d57600080fd5b8135818111156126ac57600080fd5b8860208285010111156126be57600080fd5b95989497505060200194505050565b6000602082840312156126df57600080fd5b8135610e038161262f565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612723576127236126ea565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715612752576127526126ea565b604052919050565b600067ffffffffffffffff821115612774576127746126ea565b50601f01601f191660200190565b6000806040838503121561279557600080fd5b82359150602083013567ffffffffffffffff8111156127b357600080fd5b8301601f810185136127c457600080fd5b80356127d76127d28261275a565b612729565b8181528660208385010111156127ec57600080fd5b816020840160208301376000602083830101528093505050509250929050565b60006020828403121561281e57600080fd5b5035919050565b6000806040838503121561283857600080fd5b82359150602083013561284a8161262f565b809150509250929050565b634e487b7160e01b600052602160045260246000fd5b604081016003841061288d57634e487b7160e01b600052602160045260246000fd5b9281526020015290565b600080604083850312156128aa57600080fd5b82356128b58161262f565b946020939093013593505050565b600080604083850312156128d657600080fd5b50508035926020909101359150565b60008083601f8401126128f757600080fd5b50813567ffffffffffffffff81111561290f57600080fd5b6020830191508360208260051b850101111561182057600080fd5b6000806000806040858703121561294057600080fd5b843567ffffffffffffffff8082111561295857600080fd5b612964888389016128e5565b9096509450602087013591508082111561297d57600080fd5b5061298a878288016128e5565b95989497509550505050565b6000806000606084860312156129ab57600080fd5b833567ffffffffffffffff8111156129c257600080fd5b840161018081870312156129d557600080fd5b95602085013595506040909401359392505050565b6020808252601b908201527f77616c6c65743a206e6f742066726f6d20456e747279506f696e740000000000604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8082018082111561074657610746612a21565b600060208284031215612a5c57600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112612a9057600080fd5b83018035915067ffffffffffffffff821115612aab57600080fd5b60200191503681900382131561182057600080fd5b600060018201612ad257612ad2612a21565b5060010190565b60005b83811015612af4578181015183820152602001612adc565b50506000910152565b60008251612b0f818460208701612ad9565b9190910192915050565b8181038181111561074657610746612a21565b600082612b4957634e487b7160e01b600052601260045260246000fd5b500490565b60006001600160601b03808316818103612b6a57612b6a612a21565b6001019392505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612bac816017850160208801612ad9565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612bdd816028840160208801612ad9565b01602801949350505050565b60008151808452612c01816020860160208601612ad9565b601f01601f19169290920160200192915050565b602081526000610e036020830184612be9565b808202811582820484141761074657610746612a21565b600081612c4e57612c4e612a21565b506000190190565b634e487b7160e01b600052603160045260246000fd5b6000806040808486031215612c8057600080fd5b835160028110612c8f57600080fd5b8093505060208085015167ffffffffffffffff80821115612caf57600080fd5b818701915087601f830112612cc357600080fd5b815181811115612cd557612cd56126ea565b8060051b612ce4858201612729565b918252838101850191858101908b841115612cfe57600080fd5b86860192505b83831015612dba57825185811115612d1c5760008081fd5b8601808d03601f1901891315612d325760008081fd5b612d3a612700565b88820151612d478161262f565b8152818a015187811115612d5b5760008081fd5b8083019250508d603f830112612d715760008081fd5b88820151612d816127d28261275a565b8181528f8c838601011115612d965760008081fd5b612da5828c83018e8701612ad9565b828b0152508352509186019190860190612d04565b80985050505050505050509250929050565b828152604060208201526000612de56040830184612be9565b949350505050565b805160208201516001600160e01b03198082169291906004831015612e1c5780818460040360031b1b83161693505b50505091905056feb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e55435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a5041a26469706673582212202a06c663c3ffad6efcba93350571c995e766759a6d919a4de207565653a3708464736f6c63430008110033b19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e';
const contract = {
    ABI,
    bytecode
};
exports.SimpleWalletContract = contract;
//# sourceMappingURL=simpleWallet.js.map