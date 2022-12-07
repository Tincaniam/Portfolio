import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

// Prepare to the database running on Mongodb cloud.
const projectsDB = mongoose.createConnection(
    process.env.MONGODB_PROJECTS_CONNECT_STRING
);

// The open event is called when the connection is succsesfully opened.
projectsDB.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose for projects!");
});


// Defines the Schema.
const projectSchema = mongoose.Schema({
    name: {type: String, required: true},
    status: {type: String, required: true},
    description: {type: String, required: true}, 
    link: {type: String, required: false},
    date: {type: String, required: true}
});

// Mongoose Model that creates the Javascript class Project.
const Project = mongoose.model("Project", projectSchema);


/**
* Create an Project
* @param {String} name
* @param {String} status
* @param {String} description
* @param {String} link
* @param {String} date
* @returns A promise. Resolves to the JavaScript  for the document created by calling save.
*/
const createProject = async(name, status, description, link, date) => {
    mongoose.connect(process.env.MONGODB_PROJECTS_CONNECT_STRING);
    // Call the constructor to create an instance of the model class Project
    const project = new Project({name: name, status: status, description: description, link: link, date: date});
    // Call save to persist this object as a document in MongoDB
    return project.save();
};

const findProjects = async(filter) => {
    mongoose.connect(process.env.MONGODB_PROJECTS_CONNECT_STRING);
    const query = Project.find(filter);
    return query.exec();
};

const findProjectById = async (_id) => {
    mongoose.connect(process.env.MONGODB_PROJECTS_CONNECT_STRING);
    const query = Project.findById(_id);
    return query.exec();
}

/**
* @param {String} _id
* @param {String} name
* @param {Number} status
* @param {Number} description
* @param {String} link
* @param {String} date
* @returns A promise. Resolves to the JavaScript for the document created by calling save.
*/
const replaceProject = async (_id, name, status, description, link, date) => {
    mongoose.connect(process.env.MONGODB_PROJECTS_CONNECT_STRING);
    const result = await Project.replaceOne({ _id: _id}, { name: name, status: status, description: description, link: link, date: date });
    return result.modifiedCount;
}

const deleteById = async (_id) => {
    mongoose.connect(process.env.MONGODB_PROJECTS_CONNECT_STRING);
    const result = await Project.deleteOne({ _id: _id });
    return result.deletedCount;
}

export {createProject, findProjects, findProjectById, replaceProject, deleteById};