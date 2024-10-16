import React from 'react'

function AlbumList({data}) {

  console.log(data)

  return (
    <div className='album_list_container' >
      <h3>Albums</h3>
      <div className='list_container' >
        {
          data.map((data)=>{
            return(
              <div className='search_album_cover' >
                <div className='search_album_img' >
                  <img src={data.images[0].url} />
                </div>
                <h3>{data.name}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AlbumList