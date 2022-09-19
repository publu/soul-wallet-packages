/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-08-05 21:13:10
 * @LastEditors: cejay
 * @LastEditTime: 2022-09-19 18:45:59
 */

import { IContract } from './icontract';

const ABI: any =

[
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
]

;

const bytecode = 
'0x6080604052620151806003553480156200001857600080fd5b5060405162002fbd38038062002fbd8339810160408190526200003b9162000374565b600480546001600160a01b038087166c01000000000000000000000000026001600160601b03909216919091179091558316620000be5760405162461bcd60e51b815260206004820152601960248201527f41434c3a204f776e65722063616e6e6f74206265207a65726f00000000000000604482015260640160405180910390fd5b620000d960008051602062002f9d83398151915280620001ba565b620000f460008051602062002f9d8339815191528462000205565b6200012f7f55435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a504160008051602062002f9d833981519152620001ba565b60405163095ea7b360e01b81526001600160a01b038281166004830152600019602483015283169063095ea7b3906044016020604051808303816000875af115801562000180573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a69190620003dc565b620001b057600080fd5b5050505062000407565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6200021c82826200024860201b620012a41760201c565b60008281526001602090815260409091206200024391839062001328620002e9821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620002e5576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002a43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600062000300836001600160a01b03841662000309565b90505b92915050565b6000818152600183016020526040812054620003525750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000303565b50600062000303565b6001600160a01b03811681146200037157600080fd5b50565b600080600080608085870312156200038b57600080fd5b845162000398816200035b565b6020860151909450620003ab816200035b565b6040860151909350620003be816200035b565b6060860151909250620003d1816200035b565b939692955090935050565b600060208284031215620003ef57600080fd5b815180151581146200040057600080fd5b9392505050565b612b8680620004176000396000f3fe60806040526004361061021e5760003560e01c806380c5c7d011610123578063b18c2420116100ab578063d0cb75fa1161006f578063d0cb75fa1461063b578063d547741f1461065b578063e58378bb1461067b578063e62681141461069d578063fcbac1f4146106bd57600080fd5b8063b18c2420146105b1578063c399ec88146105c6578063c41a360a146105db578063c8a5b98e146105fb578063ca15c8731461061b57600080fd5b8063a217fddf116100f2578063a217fddf14610529578063a9059cbb1461053e578063aaf9bbd61461055e578063affed0e01461057e578063b0d691fe1461059c57600080fd5b806380c5c7d0146104a9578063891dc430146104c95780639010d07c146104e957806391d148541461050957600080fd5b806336568abe116101a65780634cc499d7116101755780634cc499d7146103fc5780634d44560d146104345780634fb2e45d1461045457806373ff81cc1461047457806379f2d7c31461048957600080fd5b806336568abe14610377578063370c3089146103975780633b0a6875146103ac5780634a58db19146103f457600080fd5b80631b71bb6e116101ed5780631b71bb6e146102c5578063248a9ca3146102e557806324ea54f4146103155780632f2ff15d146103375780632f54bf6e1461035757600080fd5b806301ffc9a71461022a5780630565bb671461025f5780630c68ba2114610281578063140d075a146102a157600080fd5b3661022557005b600080fd5b34801561023657600080fd5b5061024a610245366004612384565b6106dd565b60405190151581526020015b60405180910390f35b34801561026b57600080fd5b5061027f61027a3660046123c3565b610708565b005b34801561028d57600080fd5b5061024a61029c36600461244c565b610757565b3480156102ad57600080fd5b506102b760035481565b604051908152602001610256565b3480156102d157600080fd5b5061027f6102e036600461244c565b610771565b3480156102f157600080fd5b506102b7610300366004612469565b60009081526020819052604090206001015490565b34801561032157600080fd5b506102b7600080516020612b3183398151915281565b34801561034357600080fd5b5061027f610352366004612482565b610785565b34801561036357600080fd5b5061024a61037236600461244c565b6107af565b34801561038357600080fd5b5061027f610392366004612482565b6107c9565b3480156103a357600080fd5b506102b761084c565b3480156103b857600080fd5b506103e66103c736600461244c565b6002602052600090815260409020805460019091015460ff9091169082565b6040516102569291906124c8565b61027f61086a565b34801561040857600080fd5b5061041c610417366004612469565b6108d1565b6040516001600160a01b039091168152602001610256565b34801561044057600080fd5b5061027f61044f3660046124f4565b6108eb565b34801561046057600080fd5b5061027f61046f36600461244c565b610963565b34801561048057600080fd5b506102b7610a39565b34801561049557600080fd5b5061027f6104a436600461244c565b610a52565b3480156104b557600080fd5b5061027f6104c43660046123c3565b610b9f565b3480156104d557600080fd5b5061027f6104e436600461244c565b610bd7565b3480156104f557600080fd5b5061041c610504366004612520565b610d44565b34801561051557600080fd5b5061024a610524366004612482565b610d63565b34801561053557600080fd5b506102b7600081565b34801561054a57600080fd5b5061027f6105593660046124f4565b610d8c565b34801561056a57600080fd5b5061027f61057936600461244c565b610dca565b34801561058a57600080fd5b506004546001600160601b03166102b7565b3480156105a857600080fd5b5061041c610e7e565b3480156105bd57600080fd5b506102b7610e94565b3480156105d257600080fd5b506102b7610ea8565b3480156105e757600080fd5b5061041c6105f6366004612469565b610f1c565b34801561060757600080fd5b5061027f61061636600461244c565b610f36565b34801561062757600080fd5b506102b7610636366004612469565b611034565b34801561064757600080fd5b5061027f610656366004612587565b61104b565b34801561066757600080fd5b5061027f610676366004612482565b611146565b34801561068757600080fd5b506102b7600080516020612b1183398151915281565b3480156106a957600080fd5b5061027f6106b836600461244c565b61116b565b3480156106c957600080fd5b5061027f6106d83660046125f3565b61126a565b60006001600160e01b03198216635a05180f60e01b148061070257506107028261133d565b92915050565b610710611372565b610751848484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113cf92505050565b50505050565b6000610702600080516020612b3183398151915283610d63565b61077961143f565b61078281611447565b50565b6000828152602081905260409020600101546107a0816114b0565b6107aa83836114ba565b505050565b6000610702600080516020612b1183398151915283610d63565b6001600160a01b038116331461083e5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61084882826114dc565b5050565b6000610865600080516020612b31833981519152611034565b905090565b6000610874610e7e565b6001600160a01b03163460405160006040518083038185875af1925050503d80600081146108be576040519150601f19603f3d011682016040523d82523d6000602084013e6108c3565b606091505b505090508061078257600080fd5b6000610702600080516020612b3183398151915283610d44565b6108f3611372565b6108fb610e7e565b60405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561094757600080fd5b505af115801561095b573d6000803e3d6000fd5b505050505050565b61096b610e7e565b6001600160a01b0316336001600160a01b03161461099b5760405162461bcd60e51b815260040161083590612647565b6001600160a01b0381166109f15760405162461bcd60e51b815260206004820152601960248201527f41434c3a204f776e65722063616e6e6f74206265207a65726f000000000000006044820152606401610835565b610a21600080516020612b11833981519152610a1c600080516020612b118339815191526000610d44565b6114dc565b610782600080516020612b11833981519152826114ba565b6000610865600080516020612b11833981519152611034565b610a5a610e7e565b6001600160a01b0316336001600160a01b031614610a8a5760405162461bcd60e51b815260040161083590612647565b610a93816107af565b15610ae05760405162461bcd60e51b815260206004820152601d60248201527f41434c3a204f776e65722063616e6e6f7420626520677561726469616e0000006044820152606401610835565b600060035442610af09190612694565b604080518082018252600180825260208083018590526001600160a01b0387166000908152600291829052939093208251815495965092949093849260ff1990921691908490811115610b4557610b456124b2565b0217905550602091909101516001918201555b826001600160a01b03167f1d48b67e05d67e03248ab2d9cec0c742d42363adbc05c97aa861c18fbf10485d83604051610b9391815260200190565b60405180910390a35050565b610ba7610e7e565b6001600160a01b0316336001600160a01b0316146107105760405162461bcd60e51b815260040161083590612647565b610be0816107af565b15610c2d5760405162461bcd60e51b815260206004820152601d60248201527f41434c3a204f776e65722063616e6e6f7420626520677561726469616e0000006044820152606401610835565b60016001600160a01b03821660009081526002602081905260409091205460ff1690811115610c5e57610c5e6124b2565b14610cab5760405162461bcd60e51b815260206004820152601e60248201527f61646420677561726469616e2072657175657374206e6f7420657869737400006044820152606401610835565b6001600160a01b0381166000908152600260205260409020600101544211610d0b5760405162461bcd60e51b815260206004820152601360248201527274696d652064656c6179206e6f74207061737360681b6044820152606401610835565b610d23600080516020612b31833981519152826114ba565b6001600160a01b03166000908152600260205260409020805460ff19169055565b6000828152600160205260408120610d5c90836114fe565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b610d94611372565b6040516001600160a01b0383169082156108fc029083906000818181858888f193505050501580156107aa573d6000803e3d6000fd5b610dd2610e7e565b6001600160a01b0316336001600160a01b031614610e025760405162461bcd60e51b815260040161083590612647565b600060035442610e129190612694565b604080518082018252600280825260208083018590526001600160a01b038716600090815290829052929092208151815494955091939092839160ff1916906001908490811115610e6557610e656124b2565b0217905550602091909101516001909101556002610b58565b600454600160601b90046001600160a01b031690565b6000610865610ea161084c565b600261150a565b6000610eb2610e7e565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa158015610ef8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086591906126a7565b6000610702600080516020612b1183398151915283610d44565b6001600160a01b03811660009081526002602081905260409091205460ff1681811115610f6557610f656124b2565b14610fbc5760405162461bcd60e51b815260206004820152602160248201527f7265766f6b6520677561726469616e2072657175657374206e6f7420657869736044820152601d60fa1b6064820152608401610835565b6001600160a01b038116600090815260026020526040902060010154421161101c5760405162461bcd60e51b815260206004820152601360248201527274696d652064656c6179206e6f74207061737360681b6044820152606401610835565b610d23600080516020612b31833981519152826114dc565b600081815260016020526040812061070290611541565b611053611372565b8281146110985760405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b6044820152606401610835565b60005b8381101561113f5761112d8585838181106110b8576110b86126c0565b90506020020160208101906110cd919061244c565b60008585858181106110e1576110e16126c0565b90506020028101906110f391906126d6565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113cf92505050565b806111378161271d565b91505061109b565b5050505050565b600082815260208190526040902060010154611161816114b0565b6107aa83836114dc565b611173610e7e565b6001600160a01b0316336001600160a01b0316146111a35760405162461bcd60e51b815260040161083590612647565b6001600160a01b038116600090815260026020819052604082205460ff16908111156111d1576111d16124b2565b036112125760405162461bcd60e51b81526020600482015260116024820152701c995c5d595cdd081b9bdd08195e1a5cdd607a1b6044820152606401610835565b6001600160a01b0381166000818152600260209081526040808320805460ff19169055518281529192917f1d48b67e05d67e03248ab2d9cec0c742d42363adbc05c97aa861c18fbf10485d910160405180910390a350565b61127261154b565b61127c8383611583565b61128960408401846126d6565b905060000361129b5761129b836115bf565b6107aa81611652565b6112ae8282610d63565b610848576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556112e43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610d5c836001600160a01b03841661169f565b60006001600160e01b03198216637965db0b60e01b148061070257506301ffc9a760e01b6001600160e01b0319831614610702565b61138a600080516020612b1183398151915233610d63565b8061139457503330145b6113cd5760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b6044820152606401610835565b565b600080846001600160a01b031684846040516113eb919061275a565b60006040518083038185875af1925050503d8060008114611428576040519150601f19603f3d011682016040523d82523d6000602084013e61142d565b606091505b50915091508161113f57805160208201fd5b6113cd611372565b6004546040516001600160a01b0380841692600160601b900416907f450909c1478d09248269d4ad4fa8cba61ca3f50faed58c7aedefa51c7f62b83a90600090a3600480546001600160a01b03909216600160601b026001600160601b03909216919091179055565b61078281336116ee565b6114c482826112a4565b60008281526001602052604090206107aa9082611328565b6114e68282611752565b60008281526001602052604090206107aa90826117b7565b6000610d5c83836117cc565b60008215611538578161151e600185612776565b6115289190612789565b611533906001612694565b610d5c565b50600092915050565b6000610702825490565b611553610e7e565b6001600160a01b0316336001600160a01b0316146113cd5760405162461bcd60e51b815260040161083590612647565b600061158e836117f6565b90506000815160018111156115a5576115a56124b2565b146115b5576107aa818484611856565b6107aa8183611a2d565b600480546020830135916001600160601b039091169060006115e0836127ab565b91906101000a8154816001600160601b0302191690836001600160601b031602179055506001600160601b0316146107825760405162461bcd60e51b815260206004820152601560248201527477616c6c65743a20696e76616c6964206e6f6e636560581b6044820152606401610835565b801561078257604051600090339060001990849084818181858888f193505050503d806000811461113f576040519150601f19603f3d011682016040523d82523d6000602084013e61113f565b60008181526001830160205260408120546116e657508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610702565b506000610702565b6116f88282610d63565b61084857611710816001600160a01b03166014611a6b565b61171b836020611a6b565b60405160200161172c9291906127d1565b60408051601f198184030181529082905262461bcd60e51b825261083591600401612872565b61175c8282610d63565b15610848576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610d5c836001600160a01b038416611c07565b60008260000182815481106117e3576117e36126c0565b9060005260206000200154905092915050565b60408051808201909152600081526060602082015261070261181c6101608401846126d6565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cfa92505050565b600061186061084c565b116118ad5760405162461bcd60e51b815260206004820152601c60248201527f57616c6c65743a204e6f20677561726469616e7320616c6c6f776564000000006044820152606401610835565b6118b682611d57565b6119025760405162461bcd60e51b815260206004820152601f60248201527f57616c6c65743a20496e76616c696420677561726469616e20616374696f6e006044820152606401610835565b61190a610e94565b836020015151101561195e5760405162461bcd60e51b815260206004820152601e60248201527f57616c6c65743a20496e73756666696369656e7420677561726469616e7300006044820152606401610835565b600080805b85602001515181101561095b57600086602001518281518110611988576119886126c0565b602002602001015190506119ad81600001516119a387611dc1565b8360200151611e14565b805192506001600160a01b0380851690841611611a165760405162461bcd60e51b815260206004820152602160248201527f496e76616c696420677561726469616e20616464726573732070726f766964656044820152601960fa1b6064820152608401610835565b829350508080611a259061271d565b915050611963565b60008260200151600081518110611a4657611a466126c0565b602002602001015190506107aa8160000151611a6184611dc1565b8360200151611ec0565b60606000611a7a836002612885565b611a85906002612694565b67ffffffffffffffff811115611a9d57611a9d6128a4565b6040519080825280601f01601f191660200182016040528015611ac7576020820181803683370190505b509050600360fc1b81600081518110611ae257611ae26126c0565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611b1157611b116126c0565b60200101906001600160f81b031916908160001a9053506000611b35846002612885565b611b40906001612694565b90505b6001811115611bb8576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611b7457611b746126c0565b1a60f81b828281518110611b8a57611b8a6126c0565b60200101906001600160f81b031916908160001a90535060049490941c93611bb1816128ba565b9050611b43565b508315610d5c5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610835565b60008181526001830160205260408120548015611cf0576000611c2b600183612776565b8554909150600090611c3f90600190612776565b9050818114611ca4576000866000018281548110611c5f57611c5f6126c0565b9060005260206000200154905080876000018481548110611c8257611c826126c0565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611cb557611cb56128d1565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610702565b6000915050610702565b60408051808201909152600081526060602082015260008083806020019051810190611d269190612941565b915091506040518060400160405280836001811115611d4757611d476124b2565b8152602001919091529392505050565b6000611d6660608301836126d6565b9050600003611d7757506000919050565b610702611d8760608401846126d6565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f6592505050565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b611e1f838383611f89565b611e6b5760405162461bcd60e51b815260206004820152601960248201527f41434c3a20496e76616c696420677561726469616e20736967000000000000006044820152606401610835565b611e7483610757565b6107aa5760405162461bcd60e51b815260206004820152601a60248201527f41434c3a205369676e6572206e6f74206120677561726469616e0000000000006044820152606401610835565b611ecb838383611f89565b611f105760405162461bcd60e51b815260206004820152601660248201527541434c3a20496e76616c6964206f776e65722073696760501b6044820152606401610835565b611f19836107af565b6107aa5760405162461bcd60e51b815260206004820152601860248201527f41434c3a205369676e6572206e6f7420616e206f776e657200000000000000006044820152606401610835565b6000634fb2e45d60e01b611f78836120cb565b6001600160e01b0319161492915050565b6000806000611f9885856120e3565b90925090506000816004811115611fb157611fb16124b2565b148015611fcf5750856001600160a01b0316826001600160a01b0316145b15611fdf57600192505050610d5c565b600080876001600160a01b0316631626ba7e60e01b8888604051602401612007929190612ab8565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051612045919061275a565b600060405180830381855afa9150503d8060008114612080576040519150601f19603f3d011682016040523d82523d6000602084013e612085565b606091505b5091509150818015612098575080516020145b80156120bf57508051630b135d3f60e11b906120bd90830160209081019084016126a7565b145b98975050505050505050565b60006120da8260006004612151565b61070290612ad9565b60008082516041036121195760208301516040840151606085015160001a61210d8782858561225e565b9450945050505061214a565b8251604003612142576020830151604084015161213786838361234b565b93509350505061214a565b506000905060025b9250929050565b60608161215f81601f612694565b101561219e5760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610835565b6121a88284612694565b845110156121ec5760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610835565b60608215801561220b5760405191506000825260208201604052612255565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561224457805183526020928301920161222c565b5050858452601f01601f1916604052505b50949350505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156122955750600090506003612342565b8460ff16601b141580156122ad57508460ff16601c14155b156122be5750600090506004612342565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612312573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661233b57600060019250925050612342565b9150600090505b94509492505050565b6000806001600160ff1b0383168161236860ff86901c601b612694565b90506123768782888561225e565b935093505050935093915050565b60006020828403121561239657600080fd5b81356001600160e01b031981168114610d5c57600080fd5b6001600160a01b038116811461078257600080fd5b600080600080606085870312156123d957600080fd5b84356123e4816123ae565b935060208501359250604085013567ffffffffffffffff8082111561240857600080fd5b818701915087601f83011261241c57600080fd5b81358181111561242b57600080fd5b88602082850101111561243d57600080fd5b95989497505060200194505050565b60006020828403121561245e57600080fd5b8135610d5c816123ae565b60006020828403121561247b57600080fd5b5035919050565b6000806040838503121561249557600080fd5b8235915060208301356124a7816123ae565b809150509250929050565b634e487b7160e01b600052602160045260246000fd5b60408101600384106124ea57634e487b7160e01b600052602160045260246000fd5b9281526020015290565b6000806040838503121561250757600080fd5b8235612512816123ae565b946020939093013593505050565b6000806040838503121561253357600080fd5b50508035926020909101359150565b60008083601f84011261255457600080fd5b50813567ffffffffffffffff81111561256c57600080fd5b6020830191508360208260051b850101111561214a57600080fd5b6000806000806040858703121561259d57600080fd5b843567ffffffffffffffff808211156125b557600080fd5b6125c188838901612542565b909650945060208701359150808211156125da57600080fd5b506125e787828801612542565b95989497509550505050565b60008060006060848603121561260857600080fd5b833567ffffffffffffffff81111561261f57600080fd5b8401610180818703121561263257600080fd5b95602085013595506040909401359392505050565b6020808252601b908201527f77616c6c65743a206e6f742066726f6d20456e747279506f696e740000000000604082015260600190565b634e487b7160e01b600052601160045260246000fd5b808201808211156107025761070261267e565b6000602082840312156126b957600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126126ed57600080fd5b83018035915067ffffffffffffffff82111561270857600080fd5b60200191503681900382131561214a57600080fd5b60006001820161272f5761272f61267e565b5060010190565b60005b83811015612751578181015183820152602001612739565b50506000910152565b6000825161276c818460208701612736565b9190910192915050565b818103818111156107025761070261267e565b6000826127a657634e487b7160e01b600052601260045260246000fd5b500490565b60006001600160601b038083168181036127c7576127c761267e565b6001019392505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612809816017850160208801612736565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161283a816028840160208801612736565b01602801949350505050565b6000815180845261285e816020860160208601612736565b601f01601f19169290920160200192915050565b602081526000610d5c6020830184612846565b600081600019048311821515161561289f5761289f61267e565b500290565b634e487b7160e01b600052604160045260246000fd5b6000816128c9576128c961267e565b506000190190565b634e487b7160e01b600052603160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561290a5761290a6128a4565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715612939576129396128a4565b604052919050565b6000806040838503121561295457600080fd5b82516002811061296357600080fd5b8092505060208084015167ffffffffffffffff8082111561298357600080fd5b818601915086601f83011261299757600080fd5b8151818111156129a9576129a96128a4565b8060051b6129b8858201612910565b918252838101850191858101908a8411156129d257600080fd5b86860192505b83831015612aa7578251858111156129ef57600080fd5b8601601f196040828e0382011215612a0657600080fd5b612a0e6128e7565b89830151612a1b816123ae565b8152604083015188811115612a2f57600080fd5b8084019350508d603f840112612a4457600080fd5b8983015188811115612a5857612a586128a4565b612a688b84601f84011601612910565b92508083528e6040828601011115612a7f57600080fd5b612a8f818c850160408701612736565b50808a019190915283525091860191908601906129d8565b809750505050505050509250929050565b828152604060208201526000612ad16040830184612846565b949350505050565b805160208201516001600160e01b03198082169291906004831015612b085780818460040360031b1b83161693505b50505091905056feb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e55435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a5041a2646970667358221220052f5755b76d20785487824bb07075da73ab9646350bdc725df68fc67bdf5ca864736f6c63430008100033b19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e';


const contract: IContract = {
	ABI,
	bytecode
}

export { contract as SimpleWalletContract };