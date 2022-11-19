import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams
    const newTeamData = updatedData.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    console.log(newTeamData)
    this.setState({teamData: newTeamData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="team-data-container">
            {teamData.map(each => (
              <TeamCard teamData={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
