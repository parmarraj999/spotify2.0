import React, { useContext, useState } from 'react'
import './home.css'
import HomeNav from './homeComponents/homeNav'

function Home() {

  const [currentPath, setCurrentPath] = useState('all')

  const MadeForYouData = [
    {
      "collaborative": false,
      "description": "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.",
      "external_urls": {
        "spotify": "https://open.spotify.com/playlist/4Ex1CCPHIBPbQgvXSrPixJ"
      },
      "href": "https://api.spotify.com/v1/playlists/4Ex1CCPHIBPbQgvXSrPixJ",
      "id": "4Ex1CCPHIBPbQgvXSrPixJ",
      "images": [
        {
          "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb42c074c392dde3740c087bb3",
          "height": null,
          "width": null
        }
      ],
      "name": "Discover Weekly",
      "owner": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/jxgza8brsvyrdwy31s7k4n9ov"
        },
        "href": "https://api.spotify.com/v1/users/jxgza8brsvyrdwy31s7k4n9ov",
        "id": "jxgza8brsvyrdwy31s7k4n9ov",
        "type": "user",
        "uri": "spotify:user:jxgza8brsvyrdwy31s7k4n9ov",
        "display_name": "abeer"
      },
      "public": null,
      "snapshot_id": "MjgxLDQ3Yjk1OTBmMjFkZDE1ZmQzMTQ5YTc3ZmM3MTE4YWY0NzgyYTU1ODY=",
      "tracks": {
        "href": "https://api.spotify.com/v1/playlists/4Ex1CCPHIBPbQgvXSrPixJ/tracks",
        "total": 40
      },
      "type": "playlist",
      "uri": "spotify:playlist:4Ex1CCPHIBPbQgvXSrPixJ",
      "primary_color": null
    },
    {
      "collaborative": false,
      "description": "",
      "external_urls": {
        "spotify": "https://open.spotify.com/playlist/6TGEfyZxOa2IeAgs4Y4tcq"
      },
      "href": "https://api.spotify.com/v1/playlists/6TGEfyZxOa2IeAgs4Y4tcq",
      "id": "6TGEfyZxOa2IeAgs4Y4tcq",
      "images": [
        {
          "url": "https://mosaic.scdn.co/640/ab67616d0000b273459c4f1a89716e40ed5ff12bab67616d0000b273707ea5b8023ac77d31756ed4ab67616d0000b2737b8d8ca1a8e14506c8f35233ab67616d0000b273b47eb88571640ed71dd2fd47",
          "height": 640,
          "width": 640
        },
        {
          "url": "https://mosaic.scdn.co/300/ab67616d0000b273459c4f1a89716e40ed5ff12bab67616d0000b273707ea5b8023ac77d31756ed4ab67616d0000b2737b8d8ca1a8e14506c8f35233ab67616d0000b273b47eb88571640ed71dd2fd47",
          "height": 300,
          "width": 300
        },
        {
          "url": "https://mosaic.scdn.co/60/ab67616d0000b273459c4f1a89716e40ed5ff12bab67616d0000b273707ea5b8023ac77d31756ed4ab67616d0000b2737b8d8ca1a8e14506c8f35233ab67616d0000b273b47eb88571640ed71dd2fd47",
          "height": 60,
          "width": 60
        }
      ],
      "name": "Daily Mix 1",
      "owner": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/31ytarwprwegipdw2hc2niqucc4y"
        },
        "href": "https://api.spotify.com/v1/users/31ytarwprwegipdw2hc2niqucc4y",
        "id": "31ytarwprwegipdw2hc2niqucc4y",
        "type": "user",
        "uri": "spotify:user:31ytarwprwegipdw2hc2niqucc4y",
        "display_name": "Vishrutha"
      },
      "public": null,
      "snapshot_id": "MixiMjdkMjEyYWY1Yzk1YjJjZmM3NzE2MTkwY2QwNjE5NWU5YTI3NTI3",
      "tracks": {
        "href": "https://api.spotify.com/v1/playlists/6TGEfyZxOa2IeAgs4Y4tcq/tracks",
        "total": 50
      },
      "type": "playlist",
      "uri": "spotify:playlist:6TGEfyZxOa2IeAgs4Y4tcq",
      "primary_color": null
    },
    {
      "collaborative": false,
      "description": "",
      "external_urls": {
        "spotify": "https://open.spotify.com/playlist/0Jzzfx9FoqaxvdxSuhbqVH"
      },
      "href": "https://api.spotify.com/v1/playlists/0Jzzfx9FoqaxvdxSuhbqVH",
      "id": "0Jzzfx9FoqaxvdxSuhbqVH",
      "images": [
        {
          "url": "https://mosaic.scdn.co/640/ab67616d0000b273209fe72207e47be75b485904ab67616d0000b27342cdab442bea8500403d1afeab67616d0000b273555862c7f059ba85617a68eeab67616d0000b273d3b76fb1e72018892c3dc234",
          "height": 640,
          "width": 640
        },
        {
          "url": "https://mosaic.scdn.co/300/ab67616d0000b273209fe72207e47be75b485904ab67616d0000b27342cdab442bea8500403d1afeab67616d0000b273555862c7f059ba85617a68eeab67616d0000b273d3b76fb1e72018892c3dc234",
          "height": 300,
          "width": 300
        },
        {
          "url": "https://mosaic.scdn.co/60/ab67616d0000b273209fe72207e47be75b485904ab67616d0000b27342cdab442bea8500403d1afeab67616d0000b273555862c7f059ba85617a68eeab67616d0000b273d3b76fb1e72018892c3dc234",
          "height": 60,
          "width": 60
        }
      ],
      "name": "Daily mix 2",
      "owner": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/316kak5vivo3glnjeb2h2j5wuswm"
        },
        "href": "https://api.spotify.com/v1/users/316kak5vivo3glnjeb2h2j5wuswm",
        "id": "316kak5vivo3glnjeb2h2j5wuswm",
        "type": "user",
        "uri": "spotify:user:316kak5vivo3glnjeb2h2j5wuswm",
        "display_name": "Nabeelah"
      },
      "public": null,
      "snapshot_id": "MTk1LDk0Zjc2ZWI3ZWU2YzA4OGIxMTBlYzk1ZTJiYmEyMGQwODVjN2NjMWU=",
      "tracks": {
        "href": "https://api.spotify.com/v1/playlists/0Jzzfx9FoqaxvdxSuhbqVH/tracks",
        "total": 99
      },
      "type": "playlist",
      "uri": "spotify:playlist:0Jzzfx9FoqaxvdxSuhbqVH",
      "primary_color": null
    },
    {
      "collaborative": false,
      "description": "",
      "external_urls": {
        "spotify": "https://open.spotify.com/playlist/5pz22a5RBiqH81WPyqvJse"
      },
      "href": "https://api.spotify.com/v1/playlists/5pz22a5RBiqH81WPyqvJse",
      "id": "5pz22a5RBiqH81WPyqvJse",
      "images": [
        {
          "url": "https://mosaic.scdn.co/640/ab67616d0000b27311f04db5315007b4004c4691ab67616d0000b273c5545f737b16ad5ee767b62aab67616d0000b273df242c5a5109faf8e6ea01dfab67616d0000b273f6371011af4c82fb31d54820",
          "height": 640,
          "width": 640
        },
        {
          "url": "https://mosaic.scdn.co/300/ab67616d0000b27311f04db5315007b4004c4691ab67616d0000b273c5545f737b16ad5ee767b62aab67616d0000b273df242c5a5109faf8e6ea01dfab67616d0000b273f6371011af4c82fb31d54820",
          "height": 300,
          "width": 300
        },
        {
          "url": "https://mosaic.scdn.co/60/ab67616d0000b27311f04db5315007b4004c4691ab67616d0000b273c5545f737b16ad5ee767b62aab67616d0000b273df242c5a5109faf8e6ea01dfab67616d0000b273f6371011af4c82fb31d54820",
          "height": 60,
          "width": 60
        }
      ],
      "name": "Daily mix 3",
      "owner": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/314sf2fcwqa3dyne5pdpraz7vtcm"
        },
        "href": "https://api.spotify.com/v1/users/314sf2fcwqa3dyne5pdpraz7vtcm",
        "id": "314sf2fcwqa3dyne5pdpraz7vtcm",
        "type": "user",
        "uri": "spotify:user:314sf2fcwqa3dyne5pdpraz7vtcm",
        "display_name": "Abhay"
      },
      "public": null,
      "snapshot_id": "OTQsM2Y4YmE0YjA0M2I0ZjY4N2RiNzY3YzNmYzgxY2FjZDQwZTc3MGJhYQ==",
      "tracks": {
        "href": "https://api.spotify.com/v1/playlists/5pz22a5RBiqH81WPyqvJse/tracks",
        "total": 92
      },
      "type": "playlist",
      "uri": "spotify:playlist:5pz22a5RBiqH81WPyqvJse",
      "primary_color": null
    },
    {
      "collaborative": false,
      "description": "",
      "external_urls": {
        "spotify": "https://open.spotify.com/playlist/67d1CEIdPzdhAv4nGTQkOr"
      },
      "href": "https://api.spotify.com/v1/playlists/67d1CEIdPzdhAv4nGTQkOr",
      "id": "67d1CEIdPzdhAv4nGTQkOr",
      "images": [
        {
          "url": "https://mosaic.scdn.co/640/ab67616d0000b273705ab6e67003b22644e62964ab67616d0000b273852d4ace5ba8cf082b045c38ab67616d0000b273865c8db3cbe7293861942aa2ab67616d0000b273fd2e3126a9d286550f9921a2",
          "height": 640,
          "width": 640
        },
        {
          "url": "https://mosaic.scdn.co/300/ab67616d0000b273705ab6e67003b22644e62964ab67616d0000b273852d4ace5ba8cf082b045c38ab67616d0000b273865c8db3cbe7293861942aa2ab67616d0000b273fd2e3126a9d286550f9921a2",
          "height": 300,
          "width": 300
        },
        {
          "url": "https://mosaic.scdn.co/60/ab67616d0000b273705ab6e67003b22644e62964ab67616d0000b273852d4ace5ba8cf082b045c38ab67616d0000b273865c8db3cbe7293861942aa2ab67616d0000b273fd2e3126a9d286550f9921a2",
          "height": 60,
          "width": 60
        }
      ],
      "name": "Daily Mix 4",
      "owner": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/31trzcpxvezvyganojhx4qhjzfni"
        },
        "href": "https://api.spotify.com/v1/users/31trzcpxvezvyganojhx4qhjzfni",
        "id": "31trzcpxvezvyganojhx4qhjzfni",
        "type": "user",
        "uri": "spotify:user:31trzcpxvezvyganojhx4qhjzfni",
        "display_name": "Denis"
      },
      "public": null,
      "snapshot_id": "NTgsOWQzMjg1ZDNkNDhlZTM0OTc4NmE3NmFkMzcxYjkyNzc5MWIyYWI0NA==",
      "tracks": {
        "href": "https://api.spotify.com/v1/playlists/67d1CEIdPzdhAv4nGTQkOr/tracks",
        "total": 56
      },
      "type": "playlist",
      "uri": "spotify:playlist:67d1CEIdPzdhAv4nGTQkOr",
      "primary_color": null
    },
    {
      "collaborative": false,
      "description": "",
      "external_urls": {
        "spotify": "https://open.spotify.com/playlist/7gKOfgJriY4jvOGcMfDvj3"
      },
      "href": "https://api.spotify.com/v1/playlists/7gKOfgJriY4jvOGcMfDvj3",
      "id": "7gKOfgJriY4jvOGcMfDvj3",
      "images": [
        {
          "url": "https://mosaic.scdn.co/640/ab67616d0000b2731f13bbb7f76c819ee250286dab67616d0000b273d2b531ca61f477d7b74d9072ab67616d0000b273f102cdccec25b4022260a089ab67616d0000b273f7e3e9a997900be6f6a20358",
          "height": 640,
          "width": 640
        },
        {
          "url": "https://mosaic.scdn.co/300/ab67616d0000b2731f13bbb7f76c819ee250286dab67616d0000b273d2b531ca61f477d7b74d9072ab67616d0000b273f102cdccec25b4022260a089ab67616d0000b273f7e3e9a997900be6f6a20358",
          "height": 300,
          "width": 300
        },
        {
          "url": "https://mosaic.scdn.co/60/ab67616d0000b2731f13bbb7f76c819ee250286dab67616d0000b273d2b531ca61f477d7b74d9072ab67616d0000b273f102cdccec25b4022260a089ab67616d0000b273f7e3e9a997900be6f6a20358",
          "height": 60,
          "width": 60
        }
      ],
      "name": "Daily mix 5",
      "owner": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/31az5fae76tr3xrrbflt2vra7lpm"
        },
        "href": "https://api.spotify.com/v1/users/31az5fae76tr3xrrbflt2vra7lpm",
        "id": "31az5fae76tr3xrrbflt2vra7lpm",
        "type": "user",
        "uri": "spotify:user:31az5fae76tr3xrrbflt2vra7lpm",
        "display_name": "AARYA"
      },
      "public": null,
      "snapshot_id": "MzMsODI3ODE5ZDlhNWMwMzkyZjZkNWExYjVmMWQ0Y2FjZGY3YTZmYzIwNw==",
      "tracks": {
        "href": "https://api.spotify.com/v1/playlists/7gKOfgJriY4jvOGcMfDvj3/tracks",
        "total": 32
      },
      "type": "playlist",
      "uri": "spotify:playlist:7gKOfgJriY4jvOGcMfDvj3",
      "primary_color": null
    },
  ]

  const TopMixData = [
    {
    "collaborative": false,
      "description": "Rock and Roll music picked just for you",
        "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1EIf9QdS3bOrgZ"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIf9QdS3bOrgZ",
      "id": "37i9dQZF1EIf9QdS3bOrgZ",
        "images": [
          {
            "url": "https://seed-mix-image.spotifycdn.com/v6/img/desc/Rock%20and%20Roll/en/large",
            "height": null,
            "width": null
          }
        ],
          "name": "Rock and Roll Mix",
            "owner": {
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
        "id": "spotify",
          "type": "user",
            "uri": "spotify:user:spotify",
              "display_name": "Spotify"
    },
    "public": null,
      "snapshot_id": "MCwwMDAwMDAwMDkyMjg3ODgxNmMzODdmNDhkMjc3OTk4OTQyMjhmZDc1",
        "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIf9QdS3bOrgZ/tracks",
        "total": 0
    },
    "type": "playlist",
      "uri": "spotify:playlist:37i9dQZF1EIf9QdS3bOrgZ",
        "primary_color": null
  },
  {
    "collaborative": false,
    "description": "Slow Chill music picked just for you",
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1EIeDsGY3D7QC6"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIeDsGY3D7QC6",
    "id": "37i9dQZF1EIeDsGY3D7QC6",
    "images": [
      {
        "url": "https://seed-mix-image.spotifycdn.com/v6/img/desc/Slow%20Chill/en/large",
        "height": null,
        "width": null
      }
    ],
    "name": "Slow Chill Mix",
    "owner": {
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify",
      "display_name": "Spotify"
    },
    "public": null,
    "snapshot_id": "MCwwMDAwMDAwMDJjOWU1ZDI4ZDIzM2I4OWIzMWFhODQ4ZWU1NDQ2Mzdi",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIeDsGY3D7QC6/tracks",
      "total": 0
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1EIeDsGY3D7QC6",
    "primary_color": null
  },
  {
    "collaborative": false,
    "description": "Hindi Pop music picked just for you",
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1EIcv6CMutv3XL"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIcv6CMutv3XL",
    "id": "37i9dQZF1EIcv6CMutv3XL",
    "images": [
      {
        "url": "https://seed-mix-image.spotifycdn.com/v6/img/desc/Hindi%20Pop/en/large",
        "height": null,
        "width": null
      }
    ],
    "name": "Hindi Pop Mix",
    "owner": {
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify",
      "display_name": "Spotify"
    },
    "public": null,
    "snapshot_id": "MCwwMDAwMDAwMGZiMDI5ZjBlNDIzYWJmZTkyMjQyOWY1NzI3NzQ2ZmRm",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIcv6CMutv3XL/tracks",
      "total": 0
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1EIcv6CMutv3XL",
    "primary_color": null
  },
  {
    "collaborative": false,
    "description": "Rizz music picked just for you",
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1EIdjWr4YEzRXS"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIdjWr4YEzRXS",
    "id": "37i9dQZF1EIdjWr4YEzRXS",
    "images": [
      {
        "url": "https://seed-mix-image.spotifycdn.com/v6/img/desc/Rizz/en/large",
        "height": null,
        "width": null
      }
    ],
    "name": "Rizz Mix",
    "owner": {
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify",
      "display_name": "Spotify"
    },
    "public": null,
    "snapshot_id": "MCwwMDAwMDAwMDk2ODExMWQxZmIxZDBjZmVhN2M1YTJhMTNjZDExNzBh",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIdjWr4YEzRXS/tracks",
      "total": 0
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1EIdjWr4YEzRXS",
    "primary_color": null
  },
  {
    "collaborative": false,
    "description": "Good Mood Happy music picked just for you",
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1EIgNoWOvbnUCk"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIgNoWOvbnUCk",
    "id": "37i9dQZF1EIgNoWOvbnUCk",
    "images": [
      {
        "url": "https://seed-mix-image.spotifycdn.com/v6/img/desc/Good%20Mood%20Happy/en/large",
        "height": null,
        "width": null
      }
    ],
    "name": "Good Mood Happy Mix",
    "owner": {
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify",
      "display_name": "Spotify"
    },
    "public": null,
    "snapshot_id": "MCwwMDAwMDAwMDNiMTcyNTE0OGZlMDNjMGJjNTFjNTViNjFiMDM4MzYz",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIgNoWOvbnUCk/tracks",
      "total": 0
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1EIgNoWOvbnUCk",
    "primary_color": null
  },
  {
    "collaborative": false,
    "description": "Pre Game music picked just for you",
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1EIejyNjS69e66"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIejyNjS69e66",
    "id": "37i9dQZF1EIejyNjS69e66",
    "images": [
      {
        "url": "https://seed-mix-image.spotifycdn.com/v6/img/desc/Pre%20Game/en/large",
        "height": null,
        "width": null
      }
    ],
    "name": "Pre Game Mix",
    "owner": {
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify",
      "display_name": "Spotify"
    },
    "public": null,
    "snapshot_id": "MCwwMDAwMDAwMDMwMzZkYmUzZDhhMWMyMjg2MDdjOGFmNjRhMTg4NmZk",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EIejyNjS69e66/tracks",
      "total": 0
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1EIejyNjS69e66",
    "primary_color": null
  },
]

return (
  <div className='home_container' >
    <HomeNav currentPath={currentPath} setCurrentPath={setCurrentPath} />
    <div className='home_section'>
      <div>
        <h2>Made For You</h2>
        <div className='home_album_container'>
          {
            MadeForYouData.map((data) => {
              return (
                <div className='album_cover_container'>
                  <div className='album_image' >
                    <img src={data.images[0].url} />
                  </div>
                  <div className='album_detail'>
                    <div style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                      <h4>{data.name}</h4>
                      <h5>{data.tracks.total}</h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>
        <h2>Top Mixes</h2>
      </div>
      <div className='home_album_container' >
          {
            TopMixData.map((data)=>{
              return(
                <div className='album_cover_container'>
                  <div className='album_image' >
                    <img src={data.images[0].url} />
                  </div>
                  <div className='album_detail'>
                    <div style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                      <h4>{data.name}</h4>
                      <h5>{data.tracks.total}</h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>
  </div>
)
}

export default Home