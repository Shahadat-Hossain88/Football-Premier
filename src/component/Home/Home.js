import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import TeamName from '../TeamName/TeamName';
import './Home.css'

const Home = () => {
    const [teamNames, setTeamNames] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamNames(data.teams));
    }, []);


    // const [banner,setBanner] = useState([]);
    // useEffect(() => {
    //     const  url='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setBanner(data.teams[0].strTeamBanner));
    //  },[]);

    return (

        <div className="row home-container">
            <div>
                <Header></Header>
            </div>

            {
                teamNames.map(teamName => <TeamName teamName={teamName}></TeamName>)
            }


        </div>
    );
};

export default Home;