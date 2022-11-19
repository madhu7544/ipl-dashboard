import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, teamImageUrl, id} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="teams-container">
        <img src={teamImageUrl} className="team-logo" alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
