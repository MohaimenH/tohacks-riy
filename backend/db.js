import dotenv from "dotenv";

dotenv.config();

import { DataTypes } from "sequelize";
import Sequelize from "sequelize-cockroachdb";

const connectionString = process.env.DATABASE_URL;

const sequelize = new Sequelize(connectionString);

const Instruction = sequelize.define(
    "Instruction",
    {
        // Model attributes are defined here
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        product: {
            type: DataTypes.STRING,
        },
        instruction_link: {
            type: DataTypes.STRING,
        },
        Materials: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
    },
    {
        // Other model options go here
    }
);

const retrieveAllInstructions = async () => {
    //This is a function that returns all the instructions in the database
    const instructions = await Instruction.findAll();
    console.log(instructions);
    return instructions;
};

const createInstruction = async (product, instruction_link, materials) => {
    //This is a function that creates a new instruction in the database
    const instruction = await Instruction.create({
        product: product,
        instruction_link: instruction_link,
        Materials: materials,
    });
    return instruction;
};

const deleteInstruction = async (product, instruction_link, materials) => {
    const instruction = await Instruction.destroy({
        where: {
            product: product,
            instruction_link: instruction_link,
            Materials: materials,
        },
    });
    return instruction;
};

// sequelize.close();

export { retrieveAllInstructions, createInstruction, deleteInstruction };
