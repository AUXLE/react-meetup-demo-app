import {useNavigate} from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-meetup-project-c7e17-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body:JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', {replace: true});
        }
        );
    }

    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddSubmit={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;