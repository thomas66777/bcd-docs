import { AppServer } from "./src/app"

const envPath = '.env'
console.log(`running on process ${process.pid}`)
console.log('env path', envPath)
require('dotenv').config({ path: envPath }) // eslint-disable-line @typescript-eslint/no-var-requires



async function main() {
    const app = new AppServer(__dirname)
}
(() => {
    main()
})()