import React from 'react'
import { Link } from 'react-router-dom'

function AudioBookList({ data }) {

  console.log(data)

  return (
    <div className='podcast_list_container' >
      <h3>Podcasts</h3>
      <div className='list_container' >
        {
          data.map((data) => {
            return (
              <Link to={`/podcast/${data.id}`} className='search_podcast' >
                <div className='podcast_cover_image' >
                  <img src={data.images[0].url} />
                </div>
                <div className='podcast_details'>
                  <div style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
                    <h2>{data.name}</h2>
                    <h4>{data.description}</h4>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",width:'100%',alignItems:"center",height:'50px'}} >
                    <h5 style={{ marginTop: ".6rem" }}>Author: <span>{data.authors[0].name}</span></h5>
                    <h5>Chapters : <span>{data.total_chapters}</span></h5>
                  </div>
                </div>
              </Link>
            )
          })
        }

      </div>
    </div>
  )
}

export default AudioBookList