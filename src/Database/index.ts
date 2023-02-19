/* eslint-disable prettier/prettier */
import { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_CLUSTER } from '@/config';

export const databaseConnection = {
  //url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  url: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.rtbs2mc.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
