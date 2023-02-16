import { config } from "dotenv"

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const STATUS = process.env.STATUS === 'true'
export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_CLUSTER, DB_DATABASE, ORIGIN, SECRET_KEY, LOG_DIR, LOG_FORMAT} = process.env