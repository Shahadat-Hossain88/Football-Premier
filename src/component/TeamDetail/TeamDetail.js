import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamData from '../TeamData/TeamData';
import  './TeamDetail.css'
// import '../../../Icon/Faceb

const TeamDetail = () => {

    const { teamId } = useParams();
    console.log(teamId);
    const [teamDetail, setTeamDetail] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams[0]));
        //  console.log(data) );

    }, [])

    return (
        <div className="container">
            <div className="team-badge" >
                <img src={teamDetail.strTeamBadge} alt="" />
            </div>
            <div className="team-detail">
                <div className="team-data">
                    <h3>{teamDetail.strTeam}</h3>
                    <h6>Founded: {teamDetail.intFormedYear}</h6>
                    <h6>   Country: {teamDetail.strCountry}</h6>
                    <h6>Sports Type : {teamDetail.strSport}</h6>
                    <h6>Gender : {teamDetail.strGender}</h6>
                </div>
                <div className="teamDetail-banner">
                    <img  src={teamDetail.strTeamBanner} alt="" />
                </div>
            </div>
            <div className="team-description">
                <p>{teamDetail.strDescriptionEN}</p>
                <p>{teamDetail.strStadiumDescription}</p>
            </div>
            <div>

            </div>



        </div>
    );
};

export default TeamDetail;