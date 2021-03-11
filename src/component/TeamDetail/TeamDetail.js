import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamData from '../TeamData/TeamData';
import './TeamDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import imgMale from '../../Photo/male.png'
import imgFemale from '../../Photo/female.png'
import facebook from '../../Icon/Facebook.png'
import youtube from '../../Icon/YouTube.png'
import twitter from '../../Icon/Twitter.png'
import flag from '../../Icon/flag (1) 1.png'
import football from '../../Icon/football (1) 1.png'
import found from '../../Icon/found 1.png'
import gender from '../../Icon/male-gender-sign 1.png'




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

    }, [teamId])
    

    return (
        <div className="container">

            <div className="team-badge" >
                <img src={teamDetail.strTeamBadge} alt="" />
            </div>
            <div className="team-detail">
                <div className="team-data">
                    <h3>{teamDetail.strTeam}</h3>
                    <h6> <img src={found} alt="" />Founded: {teamDetail.intFormedYear}</h6>
                    <h6> <img src={flag} alt="" />   Country: {teamDetail.strCountry}</h6>
                    <h6><img src={football} alt="" /> Sports Type : {teamDetail.strSport}</h6>
                    <h6> <img src={gender} alt="" /> Gender : {teamDetail.strGender}</h6>
                </div>
                <div className="teamDetail-banner">
                    {
                        teamDetail.strGender === "Male"?
                        <img src={imgMale} alt="" />
                        : <img src={imgFemale} alt="" />
                    
                    }
                </div>
            </div>
            <div className="team-description">
                <p>{teamDetail.strDescriptionEN}</p>
                <p>{teamDetail.strStadiumDescription}</p>
            </div>
            <div className="media">

                <a href="facebook.com" target="_blank"> <img src={facebook} alt="" /></a>
                <a href="youtube.com" target="_blank"> <img src={youtube} alt="" /></a>
                <a href="twitter.com" target="_blank"> <img src={twitter} alt="" /></a>

            </div>



        </div>
    );
};

export default TeamDetail;