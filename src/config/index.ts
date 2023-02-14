import { config } from "dotenv"

config({ path: `.env.dev.txt` });

export const STATUS = process.env.STATUS === 'true'
export const { PORT, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_CLUSTER} = process.env