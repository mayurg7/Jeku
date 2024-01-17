import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) =>{


    return <div style={{height:'100vh'}}>
        <PrettyChatWindow
            projectId='53a3389f-d8cb-46fc-8a4b-88fcf2a2bc0f'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%'}}/>
    </div>
}

export default ChatsPage