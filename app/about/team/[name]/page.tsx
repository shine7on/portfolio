// Dynamic Page routing
import Reach from 'react'

const TeamDetailsPage = async({ params }) => { // added the sug
    const name = (await params).name;
    return <div className="text-white text-5xl">Team member detailed page {name}</div>;
};

export default TeamDetailsPage;