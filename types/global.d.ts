/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

// https://stackoverflow.com/a/69288824
private type Expand<T> = T extends (...args: infer A) => infer R
? (...args: Expand<A>) => Expand<R>
: T extends infer O
? { [K in keyof O]: O[K] }
: never;

declare type byte<N = void> = string

declare type uint8<N = void> = N extends number ? number[] : number;
declare type uint16<N = void> = N extends number ? number[] : number;
declare type uint24<N = void> = N extends number ? number[] : number;
declare type uint32<N = void> = N extends number ? number[] : number;
declare type uint40<N = void> = N extends number ? number[] : number;
declare type uint48<N = void> = N extends number ? number[] : number;
declare type uint56<N = void> = N extends number ? number[] : number;
declare type uint64<N = void> = N extends number ? number[] : number;
declare type uint72<N = void> = N extends number ? number[] : number;
declare type uint80<N = void> = N extends number ? number[] : number;
declare type uint88<N = void> = N extends number ? number[] : number;
declare type uint96<N = void> = N extends number ? number[] : number;
declare type uint104<N = void> = N extends number ? number[] : number;
declare type uint112<N = void> = N extends number ? number[] : number;
declare type uint120<N = void> = N extends number ? number[] : number;
declare type uint128<N = void> = N extends number ? number[] : number;
declare type uint136<N = void> = N extends number ? number[] : number;
declare type uint144<N = void> = N extends number ? number[] : number;
declare type uint152<N = void> = N extends number ? number[] : number;
declare type uint160<N = void> = N extends number ? number[] : number;
declare type uint168<N = void> = N extends number ? number[] : number;
declare type uint176<N = void> = N extends number ? number[] : number;
declare type uint184<N = void> = N extends number ? number[] : number;
declare type uint192<N = void> = N extends number ? number[] : number;
declare type uint200<N = void> = N extends number ? number[] : number;
declare type uint208<N = void> = N extends number ? number[] : number;
declare type uint216<N = void> = N extends number ? number[] : number;
declare type uint224<N = void> = N extends number ? number[] : number;
declare type uint232<N = void> = N extends number ? number[] : number;
declare type uint240<N = void> = N extends number ? number[] : number;
declare type uint248<N = void> = N extends number ? number[] : number;
declare type uint256<N = void> = N extends number ? number[] : number;
declare type uint264<N = void> = N extends number ? number[] : number;
declare type uint272<N = void> = N extends number ? number[] : number;
declare type uint280<N = void> = N extends number ? number[] : number;
declare type uint288<N = void> = N extends number ? number[] : number;
declare type uint296<N = void> = N extends number ? number[] : number;
declare type uint304<N = void> = N extends number ? number[] : number;
declare type uint312<N = void> = N extends number ? number[] : number;
declare type uint320<N = void> = N extends number ? number[] : number;
declare type uint328<N = void> = N extends number ? number[] : number;
declare type uint336<N = void> = N extends number ? number[] : number;
declare type uint344<N = void> = N extends number ? number[] : number;
declare type uint352<N = void> = N extends number ? number[] : number;
declare type uint360<N = void> = N extends number ? number[] : number;
declare type uint368<N = void> = N extends number ? number[] : number;
declare type uint376<N = void> = N extends number ? number[] : number;
declare type uint384<N = void> = N extends number ? number[] : number;
declare type uint392<N = void> = N extends number ? number[] : number;
declare type uint400<N = void> = N extends number ? number[] : number;
declare type uint408<N = void> = N extends number ? number[] : number;
declare type uint416<N = void> = N extends number ? number[] : number;
declare type uint424<N = void> = N extends number ? number[] : number;
declare type uint432<N = void> = N extends number ? number[] : number;
declare type uint440<N = void> = N extends number ? number[] : number;
declare type uint448<N = void> = N extends number ? number[] : number;
declare type uint456<N = void> = N extends number ? number[] : number;
declare type uint464<N = void> = N extends number ? number[] : number;
declare type uint472<N = void> = N extends number ? number[] : number;
declare type uint480<N = void> = N extends number ? number[] : number;
declare type uint488<N = void> = N extends number ? number[] : number;
declare type uint496<N = void> = N extends number ? number[] : number;
declare type uint504<N = void> = N extends number ? number[] : number;
declare type uint512<N = void> = N extends number ? number[] : number;

declare type ufixed64x2<N = void> = N extends number ? number[] : number;

declare type bytes = string
declare type StaticArray<T, N extends number> = T[]

declare class Asset {
  constructor(id: uint64)

  static readonly zeroIndex: Asset;

  readonly total: uint64;

  readonly decimals: uint64;

  readonly defaultFrozen: uint64;

  readonly name: string;

  readonly unitName: string;

  readonly url: string;

  readonly metadataHash: string;

  readonly manager: Account;

  readonly reserve: Account;

  readonly freeze: Account;

  readonly clawback: Account;

  readonly creator: Account;
}

declare class Account {
  constructor(id: uint64)

  static readonly zeroAddress: Account;

  readonly balance: uint64;

  readonly hasBalance: uint64;

  readonly minBalance: uint64;

  readonly totalAssets: uint64;

  // eslint-disable-next-line no-use-before-define
  readonly authAddr: Account;

  readonly totalNumUint: uint64;

  readonly totalNumByteSlice: uint64;

  readonly totalExtraAppPages: uint64;

  readonly totalAppsCreated: uint64;

  readonly totalAppsOptedIn: uint64;

  readonly totalAssetsCreated: uint64;

  readonly totalBoxes: uint64;

  readonly totalBoxBytes: uint64;

  assetBalance(asa: Asset): uint64

  hasAsset(asa: Asset): uint64

  assetFrozen(asa: Asset): uint64
}

type BytesLike = bytes | Account

declare class Application {
  constructor(id: uint64)

  static readonly zeroIndex: Application;

  readonly approvalProgram: bytes;

  readonly clearStateProgram: bytes;

  readonly globalNumUint: uint64;

  readonly globalNumByteSlice: uint64;

  readonly localNumUint: uint64;

  readonly localNumByteSlice: uint64;

  readonly extraProgramPages: uint64;

  readonly creator: Account;

  readonly address: Account;

  global(key: BytesLike): BytesLike | IntLike
}

declare class BoxMap<KeyType, ValueType> {
  constructor(options?: { defaultSize?: number, dynamicSize?: boolean })

  get(key: KeyType): ValueType

  exists(key: KeyType): uint64

  delete(key: KeyType): void

  put(key: KeyType, value: ValueType): void
}

declare class BoxReference<ValueType> {
  constructor(options?: { defaultSize?: number, key?: string, dynamicSize?: boolean })

  get(): ValueType

  exists(): uint64

  delete(): void

  put(value: ValueType): void
}

declare class GlobalMap<KeyType, ValueType> {
  constructor()

  get(key: KeyType): ValueType

  exists(key: KeyType): uint64

  delete(key: KeyType): void

  put(key: KeyType, value: ValueType): void
}

declare class GlobalReference<ValueType> {
  constructor(options?: { key?: string })

  get(): ValueType

  exists(): uint64

  delete(): void

  put(value: ValueType): void
}

declare class LocalMap<KeyType, ValueType> {
  constructor()

  get(account: Account, key: KeyType): ValueType

  exists(account: Account, key: KeyType): uint64

  delete(account: Account, key: KeyType): void

  put(account: Account, key: KeyType, value: ValueType): void
}

declare class LocalReference<ValueType> {
  constructor(options?: { key?: string })

  get(account: Account): ValueType

  exists(account: Account): uint64

  delete(account: Account): void

  put(account: Account, value: ValueType): void
}

type IntLike = uint64 | Asset | Application | boolean

interface CommonTransactionParams {
  fee: uint64
  sender?: Account
  rekeyTo?: Account
  note?: string
}

interface OnChainTransactionParams extends CommonTransactionParams {
  groupIndex: uint64,
  createdAssetID: Asset,
  createdApplicationID: Application,
}

interface AssetTransferParams extends CommonTransactionParams {
  xferAsset: Asset
  assetAmount: uint64
  assetSender?: Account
  assetReceiver: Account
  assetCloseTo?: Account
}

interface AssetCreateParams extends CommonTransactionParams {
  configAssetName?: bytes
  configAssetUnitName?: bytes
  configAssetTotal: uint64
  configAssetDecimals: uint64
  configAssetManager?: Account
  configAssetReserve?: Account
}

interface PaymentParams extends CommonTransactionParams {
  amount: uint64
  receiver: Account
  closeRemainderTo?: Account
}

interface AppParams extends CommonTransactionParams {
  applicationID?: Application
  onCompletion: 'NoOp' | 'OptIn' | 'CloseOut' | 'ClearState' | 'UpdateApplication' | 'DeleteApplication' | 'CreateApplication'
  accounts?: Account[]
  approvalProgram?: bytes | NewableFunction
  applicationArgs?: bytes[]
  clearStateProgram?: bytes
  applications?: Array<uint64 | Application>
  assets?: Array<uint64 | Asset>
  globalNumByteSlice?: uint64
  globalNumUint?: uint64
  localNumByteSlice?: uint64
  localNumUint?: uint64
}

declare type PayTxn = Required<PaymentParams>
declare type AssetTransferTxn = Required<AssetTransferParams>
declare type AppCallTxn = Required<AppParams>

interface MethodCallParams<ArgsType> extends AppParams {
  /** ABI method arguments */
  methodArgs?: ArgsType
  /** Name of the ABI method */
  name: string
}

type ThisTxnParams = OnChainTransactionParams & AppParams & Required<{sender: Account}>

type Transaction = PayTxn & AssetTransferTxn & AppCallTxn

declare const globals: {
  minTxnFee: uint64
  minBalance: uint64
  maxTxnLife: uint64
  zeroAddress: Account
  groupSize: uint64
  logicSigVersion: uint64
  round: uint64
  latestTimestamp: uint64
  currentApplicationID: Application
  creatorAddress: Account
  currentApplicationAddress: Account
  groupID: bytes
  opcodeBudget: uint64
  callerApplicationID: Application
  callerApplicationAddress: Account
};

declare function method(signature: string): bytes
declare function addr(address: string): Account

declare function sendPayment(params: Expand<PaymentParams>): void
declare function sendAppCall(params: Expand<AppParams>): void
declare function sendAssetTransfer(params: Expand<AssetTransferParams>): void
declare function sendAssetCreation(params: Expand<AssetCreateParams>): Asset
/**
 * Sends ABI method call. The two type arguments in combination with the
 * name argument are used to form the the method signature to ensure typesafety.
 *
 * @example
 * Calling a method and getting the return value
 * ```ts
 * // call createNFT(string,string)uint64
 * const createdAsset = sendMethodCall<[string, string], Asset>({
 *     applicationID: factoryApp,
 *     name: 'createNFT',
 *     methodArgs: ['My NFT', 'MNFT'],
 *     onCompletion: 'NoOp',
 *     fee: 0,
 * });
 * ```
 *
 * @returns The return value of the method call
 *
 * @typeParam ArgsType - A tuple type corresponding to the types of the method arguments
 * @typeParam ReturnType - The return type of the method
 *
 * @param params - The parameters of the method call
 *
 */
declare function sendMethodCall<ArgsType, ReturnType>(
  params: Expand<MethodCallParams<ArgsType>>
): ReturnType
declare function btoi(byteslice: BytesLike): uint64
declare function itob(int: IntLike): bytes
declare function log(content: BytesLike): void
declare function err()
declare function sha256(arg0: BytesLike)
declare function keccak256(arg0: BytesLike)
declare function sha512_256(arg0: BytesLike)
declare function ed25519verify(arg0: BytesLike, arg1: BytesLike, arg2: BytesLike)
declare function len(arg0: BytesLike)
declare function mulw(arg0: IntLike, arg1: IntLike)
declare function addw(arg0: IntLike, arg1: IntLike)
declare function divmodw(arg0: IntLike, arg1: IntLike, arg2: IntLike, arg3: IntLike)
declare function assert(arg0: IntLike)
declare function concat(arg0: BytesLike, arg1: BytesLike)
declare function substring3(arg0: BytesLike, arg1: IntLike, arg2: IntLike)
declare function getbit(arg0: BytesLike, arg1: IntLike)
declare function setbit(arg0: BytesLike, arg1: IntLike, arg2: IntLike)
declare function getbyte(arg0: BytesLike, arg1: IntLike)
declare function setbyte(arg0: BytesLike, arg1: IntLike, arg2: IntLike)
declare function extract3(arg0: BytesLike, arg1: IntLike, arg2: IntLike)
declare function extract_uint16(arg0: BytesLike, arg1: IntLike)
declare function extract_uint32(arg0: BytesLike, arg1: IntLike)
declare function extract_uint64(arg0: BytesLike, arg1: IntLike)
declare function replace3(arg0: BytesLike, arg1: IntLike, arg2: BytesLike)
declare function ed25519verify_bare(arg0: BytesLike, arg1: BytesLike, arg2: BytesLike)
declare function sqrt(arg0: IntLike)
declare function bitlen(arg0: BytesLike)
declare function exp(arg0: IntLike, arg1: IntLike)
declare function expw(arg0: IntLike, arg1: IntLike)
declare function bsqrt(arg0: BytesLike)
declare function divw(arg0: IntLike, arg1: IntLike, arg2: IntLike)
declare function sha3_256(arg0: BytesLike)

declare function wideRatio(numeratorFactors: uint64[], denominatorFactors: uint64[]): uint64

function decoratorFunction (
  target: Object,
  key: string | symbol,
  descriptor: PropertyDescriptor
): PropertyDescriptor

declare const clearState = decoratorFunction;
declare const createApplication = decoratorFunction;
declare const noOp = decoratorFunction;
declare const optIn = decoratorFunction;
declare const closeOut = decoratorFunction;
declare const updateApplication = decoratorFunction;
declare const deleteApplication = decoratorFunction;
