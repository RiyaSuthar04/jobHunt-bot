import * as dotenv from "dotenv";

dotenv.config();

const getEnv = (key: string):string =>{
    const value = process.env[key];
    if(!value){
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
}

export const env = {

    DISCORD_TOKEN: getEnv("DISCORD_TOKEN"),
    CLIENT_ID: getEnv("CLIENT_ID"),
    GUILD_ID: getEnv("GUILD_ID"),
    
}