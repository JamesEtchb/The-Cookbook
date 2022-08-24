import functions from 'firebase-functions'
import { Express } from 'express'
import { cors } from 'cors'
import { getAsian, addAsian } from './src/asian'
import { getAfrican, addAfrican } from './src/african'
import { getNorthAmerican, addNorthAmerican } from './src/northAmerican'
import { getLatin, addLatin } from './src/latin'
import { getEuropean, addEuropean } from './src/european'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/asian', getAsian)
app.post('/asian', addAsian)

app.get('/north-american', getNorthAmerican)
app.post('/north-american', addNorthAmerican)

app.get('/latin', getLatin)
app.post('/latin', addLatin)

app.get('/european', getEuropean)
app.post('/european', addEuropean)

app.get('/african', getAfrican)
app.post('/african', addAfrican)

export const api = functions.https.onRequest(app)