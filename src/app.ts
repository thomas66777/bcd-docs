import http from 'http'
import https from 'https'
import fs from 'fs'

import express from 'express'

import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import bodyParser from 'body-parser'
import swaggerNew from './bcd-new.json'
import swaggerWhite from './bcd-white.json'

export class AppServer {
    private _app: express.Express;
    private _server: http.Server | https.Server;

    constructor(rootDir: string) {
        const ip = String(process.env.API_BINDIP)
        const port = Number(process.argv[2] || process.env.API_PORT)

        this._app = createExpressApp()

        // Plugin the Routes
        const swaggerApiPathNew = `/swagger`.replace(/\/\//, '/')
        const swagger = process.argv[3] == 'white' ? swaggerWhite : swaggerNew

        this._app.use(swaggerApiPathNew, swaggerUi.serve, swaggerUi.setup({
            ...swagger,
            servers: [
                {
                    'description': 'base api for endpoints'
                }
            ]
        }))

        this._server = getHttpServer(rootDir, this._app)
        this._server.listen(port, ip, () => {
            console.info(`Server running on ${ip}:${port}`)
        })
        this._app.set('trust proxy', true)
        this._app.set('mapContracts', new Map())
    }

}
export function getHttpServer(rootDir: string, app?: express.Express, ssl?: boolean): http.Server | https.Server {
    if (ssl ?? JSON.parse(process.env.API_SSL)) {
        const privateKey = fs.readFileSync(process.env.CA_PRIVATE_KEY_PEM)
        const certificate = fs.readFileSync(process.env.CA_CERTIFICATE_PEM)

        return https.createServer({
            key: privateKey,
            cert: certificate
        }, app)
    } else {
        return http.createServer(app)
    }
}

export function createExpressApp(): express.Express {
    const app = express()

    // Create a Socket Server
    // this._socketServer = new SocketServer(app);

    // For now allow cors but later need to lock this down with IP Adress or credential based access
    // app.use(cors({credentials: true, origin: true}));
    app.use(cors())

    // middleware
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    return app
}

