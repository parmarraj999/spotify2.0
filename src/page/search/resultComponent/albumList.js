import React from 'react'

function AlbumList({ data }) {

  console.log(data)

  return (
    <div className='album_list_container' >
      <h3>Albums</h3>
      <div className='list_container' >
        {
          data.map((data) => {
            return (
              <div className='search_album_cover' >
                <div className='search_album_img' style={{backgroundImage:`url(${data.images[0].url})`}}>
                  {/* <img className='img_1' src={data.images[0].url} /> */}
                  <div>
                    <h3>{data.name}</h3>
                    <h4>{data.artists[0].name},</h4>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AlbumList