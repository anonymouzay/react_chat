const express= require('express');
const socketio= require('socket.io');
const http= require('http');
const cors = require('cors');

const {addUser,removeUser,getUser,getUsersInRoom} = require('./users')

const PORT = process.env.PORT || 5000;

const router = require('./router')

const app = express();
const server = http.createServer(app); 
const io = socketio(server);


io.on('connection', function(socket){
    console.log("new Connection");

  
    socket.on('join',({name,room},callback )=>{
        console.log(name,room);
        const user  = addUser({ id: socket.id, name, room });
        // if(error) return callback(error);

        io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)})

        socket.emit('message', {user:'admin',text:`${user.name},welcome to the room ${user.room}`} );
        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} has joined the room ${user.room}`})
        socket.emit('roomData',{room:user.room,users:getUsersInRoom(user.room)})
        

        socket.on('sendMessage',(message,callback) =>{
            const user = getUser(socket.id);
            io.to(user.room).emit('message',{user:user.name,text:message})
            io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)})
            callback();
        })
 
        socket.join(user.room);
    });
    socket.on("disconnect", () =>{
        console.log('Connection ended')
        const user=removeUser(socket.id)
        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left the room`})
        }
    })
});

app.use(router);
app.use(cors());
server.listen(PORT, () => console.log('Server has started on port: '+PORT));