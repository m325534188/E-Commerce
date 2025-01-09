const jf=require('jsonfile');

const FILE=require('./jsonfile.json');

const getPersons = () => {
    return jf.readFile(FILE);
  };
const setfile=async(obj)=>{
    const persons = await jf.readFile(FILE);
    persons.push(obj)
     await jf.writeFile( FILE,persons)
}

module.exports = {getPersons,setfile};