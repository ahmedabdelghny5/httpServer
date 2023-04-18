
// const users = [
//   { id: 1, name: "ali", age: 35 },
//   { id: 2, name: "ahmed", age: 25 },
//   { id: 3, name: "adam", age: 15 },
// ];
// const posts = [
//   { id: 1, author: "ali", text: "very good" },
//   { id: 2, author: "ahmed", text: "very ok" },
//   { id: 3, author: "adam", text: "very beautiful" },
// ];



// const http = require("http");
// const server = http.createServer((req, res, next) => {
//   let { url, method } = req;
//   // get all user
//   if (url == "/getAllUser" && method == "GET") {
//     res.write(JSON.stringify(users));
//     res.end();
//   }
//   // add user
//   else if (url === "/addUser" && method === "POST") {
//     let bufferData;
//     req.on("data", (data) => {
//       bufferData = data;
//       console.log(bufferData);
//     });
//     req.on("end", () => {
//       const parsedData = JSON.parse(bufferData);
//       const result = users.find((ele) => ele.id == parsedData.id);
//       console.log(result);
//       if (result) {
//         res.write("id repeated");
//         res.end();
//       } else {
//         users.push(parsedData);
//         res.write("user added succesfully");
//         res.end();
//       }
//     });
//   }
//   // sorting users 
//   else if(url === "/allUser/sorted" && method === "GET"){
//     let sorted = users.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
//     res.write(JSON.stringify(sorted));
//     res.end()

//   } // delete user
//   else if(url === "/deleteUser" && method === "DELETE"){
//     let bufferData;
//     req.on("data", (data) => {
//       bufferData = data;

//     });
//     req.on('end',() => {
//       const parsedData = JSON.parse(bufferData);

//       const result = users.find((ele) => ele.id == parsedData.id);
//       if (result) {

//         let index =users.indexOf(result);
//       users.splice(index,1);
//       res.write('user deleted succefully');
//       res.end();
//       }else{
//         res.write('user not found');
//         res.end();
//       }

//     })
//   // update user
//    }else if (url === "/updateUser" && method === "PUT"){
//     let bufferData;
//     req.on("data", (data) => {
//       bufferData = data;

//     });
//     req.on('end',() => {
//       const parsedData = JSON.parse(bufferData);
//       let result = users.find((ele) => ele.id ==parsedData.id );
//       let userIndex = users.indexOf(result)
//       if (result) {
//         users[userIndex].name = parsedData.name;
//         users[userIndex].age = parsedData.age;
//         res.write('update done succefully');
//         res.end()
//       }else{
//         res.write('user not found');
//         res.end();
//       }
//     });
//    }
//    // search 
//    else if(url === "/searchUser" && method === "GET"){
//     let bufferData;
//     req.on("data", (data) => {
//       bufferData = data;

//     });
//     req.on('end',() => {
//       const parsedData = JSON.parse(bufferData);

//       const result = users.find((ele) => ele.id == parsedData.id);
//       if (result) {
//         console.log(result)
//       res.write(JSON.stringify(result));
//       res.end();
//       }else{
//         res.write('user not found');
//         res.end();
//       }

//     })
//    }

//    //get all  posts
//    if (url == "/getallPosts" && method == "GET") {
//     res.write(JSON.stringify(posts));
//     res.end();
//   }    // add post
//   else if (url === "/addPost" && method === "POST") {
//     let bufferData;
//     req.on("data", (data) => {
//       bufferData = data;
//     });
//     req.on("end", () => {
//       const parsedData = JSON.parse(bufferData);
//       const result = posts.find((ele) => ele.id == parsedData.id);
//       console.log(result);
//       if (result) {
//         res.write("id repeated");
//         res.end();
//       } else {
//         posts.push(parsedData);
//         res.write("post added succesfully");
//         res.end();
//       }
//     });
//   }// get all posted reversed
//   else if(url ==='/getallPostsReversed' && method === "GET"){
//       let postsCopy = [...posts];
//       let reversedPosts = postsCopy.reverse()
//       console.log(reversedPosts)
//       res.write(JSON.stringify(reversedPosts));
//       res.end()
//   }// delete post 
//   else if(url === "/deletePost" && method === "DELETE"){
//     let bufferData;
//     req.on("data", (data) => {
//       bufferData = data;

//     });
//     req.on('end',() => {
//       const parsedData = JSON.parse(bufferData);

//       const result = posts.find((ele) => ele.id == parsedData.id);
//       if (result) {

//         let index =posts.indexOf(result);
//       posts.splice(index,1);
//       res.write('post deleted succefully');
//       res.end();
//       }else{
//         res.write('post not found');
//         res.end();
//       }

//     })

//    }// update post

//   else if (url === "/updatePost" && method === "PUT"){
//     let bufferData;
//     req.on("data", (data) => {
//       bufferData = data;

//     });
//     req.on('end',() => {
//       const parsedData = JSON.parse(bufferData);
//       let result = posts.find((ele) => ele.id ==parsedData.id );
//       let userIndex = posts.indexOf(result)
//       if (result) {
//         posts[userIndex].author = parsedData.author;
//         posts[userIndex].text = parsedData.text;
//         res.write('update done succefully');
//         res.end()
//       }else{
//         res.write('post not found');
//         res.end();
//       }
//     });
//    }
//     // search posts
//     else if(url === "/searchPosts" && method === "GET"){
//       let bufferData;
//       req.on("data", (data) => {
//         bufferData = data;

//       });
//       req.on('end',() => {
//         const parsedData = JSON.parse(bufferData);

//         const result = posts.find((ele) => ele.id == parsedData.id);
//         if (result) {

//         res.write(JSON.stringify(result));
//         res.end();
//         }else{
//           res.write('user not found');
//           res.end();
//         }

//       })
//      }

// });

// server.listen(5000, () => {
//   console.log("server is running ");
// });







