import React, { useEffect, useState } from 'react'
import './podcastDetail.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function PodcastDetail() {

  const {id} = useParams();

  const [data,setData] = useState();

  const access_token = window.localStorage.getItem("token")

  // const getShowDetail = async () => {
  //   const { data } = await axios.get(`https://api.spotify.com/v1/shows/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${access_token}`
  //     }
  //   })
  //   console.log(data)
  // }

  // useEffect(() => {
  //   getShowDetail();
  // }, [])

  const navigate = useNavigate();

  const getBack = () => {
    navigate(-1)
  }

  return (
    <div className='podcast_detail_container' >
      <h3>No Podcast Data Found</h3>
      <h5>Working on It :)</h5>
      <div onClick={getBack} >Back</div>
    </div>
  )
}

export default PodcastDetail