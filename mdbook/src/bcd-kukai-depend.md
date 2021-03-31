## Kukai Dependencies


All better-call-dev dependencies are in `tzkt.service.ts`

#### Better Call Dev
> `this.bcd` = `https://api.better-call.dev/v1`
* [`${this.bcd}/tokens/${this.network}/transfers/${address}?size=20&offset=0`](./api-tokens-transfers.md)
* [`${this.bcd}/bigmap/${this.network}/${bigMapId}/keys`](./api-bigmap.md)
* [`${this.bcd}/account/${this.network}/${address}`](./api-account.md)
* [`${this.bcd}/account/${this.network}/${contractAddress}/metadata`](./api-account-metadata.md)
* [`${this.bcd}/contract/${this.network}/${contractAddress}`](./contract.md)
* [`${this.bcd}/contract/${this.network}/${contractAddress}/storage`](./api-contract-storage.md)
* [`${this.bcd}/contract/${this.network}/${contractAddress}/tokens`](./api-contract-tokens.md)
