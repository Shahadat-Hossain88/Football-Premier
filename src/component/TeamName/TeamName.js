import React  from 'react';
import './TeamName.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Button  } from 'react-bootstrap';
import TeamDetail from '../TeamDetail/TeamDetail';
import { Link, useHistory } from 'react-router-dom';

const TeamName = (props) => {

    const { strTeam, strTeamBadge, strSport , idTeam,strTeamBanner} = props.teamName;
    

    
    return (
        <div className="col-md-4">
            <div>
            </div>
            <div className="card-container  card  " >
                <img src={strTeamBadge} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{strTeam}</h5>
                    <p>Sports Type {strSport}</p>
                    <Link to={`team-detail/${idTeam}`}>
                    <Button variant="success"  >  Explore <FontAwesomeIcon icon={faArrowCircleRight} ></FontAwesomeIcon> </Button>
                    </Link>

                </div>
            </div>

        </div>

    );
};

export default TeamName;