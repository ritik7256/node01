const fs=require('fs');

// fs.mkdirSync('new')

// fs.writeFileSync('new/bio.txt','my name is ritik');
// fs.appendFileSync('new/bio.txt',"i am appending the data and appending it")


// const data=fs.readFileSync('new/bio.txt',"utf8")
// console.log(data);
// fs.renameSync("new/bio.txt","new/newbio.txt");



// fs.unlinkSync("new/newbio.txt");
fs.rmdirSync('new')
