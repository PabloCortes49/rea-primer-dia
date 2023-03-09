
import Contact from "./components/Contact/Contact";
import {Header} from "./components/Header/Header";

const myContacts = [
    {
        name: 'Josemi',
        imageUrl: 'https://ca.slack-edge.com/T0467LBA3HP-U045V14CLBV-f0a2123981ce-512',
        email: 'josemi@streamloots.com',
    },
    {
        name: 'Josemi',
        imageUrl: 'https://ca.slack-edge.com/T0467LBA3HP-U045V14CLBV-f0a2123981ce-512',
        email: 'jjjj@streamloots.com',
    },
    {
        name: 'Pepemi',
        imageUrl: 'https://ca.slack-edge.com/T0467LBA3HP-U045V14CLBV-f0a2123981ce-512',
        email: 'pepemi@streamloots.com',
    }
]

const MyNewApp = () => {
    return <div>
        <Header>
            <span>My contacts</span>
        </Header>
       {myContacts.map(element => <Contact name={element.name} imageUrl={element.imageUrl} email={element.email} key={element.email}/>)}
    </div>
}

export default MyNewApp;









