const uuidv = require('uuid/v4')

const createUser = ({name: ""} = {}) =>(
    {
        id: uuidv(),
        name
    }
)


const createMessage = ({message="", sender=""} = {})=(
    {
        id: uuidv4(),
        time:getTime(new Date(Date.now())),
        message,
        sender
    }
)

const createChat = ({messages=[], name="Community", users=[]} = {})=>(
    {
        id:uuidv4(),
        name,
        message,
        users,
        typingUsers:[]
    }
)

const getTime = (date)=>{
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}