/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config({ path: '.env.local' });
console.log("Database URL:", process.env.DATABASE_URL);
const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
    try {
        await database.subject.createMany({
            data: [
                { name: "Java for software development" },
                { name: "Mathemetics Foundation for Data Science" },
                { name: "Advance Web Technology" },
                { name: "Data Structure and Algorithm" },
            ]
        })
        console.log("success");
    } catch (error) {
        console.log("error", error)
    }finally{
        database.$disconnect();
    }
}

main();