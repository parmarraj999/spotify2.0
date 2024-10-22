import React from 'react'
import { Link } from 'react-router-dom'

function BrowseSection() {

    const data = [
        {
            "collaborative": false,
            "description": "Hottest Hindi music that India is listening to. Cover - Stree 2",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUfTFmNBRM",
            "id": "37i9dQZF1DX0XUfTFmNBRM",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000278c3ea7da56f79e29f208a02",
                "width": null
              }
            ],
            "name": "Hot Hits Hindi",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZvyiGAAAAAD8xteRuoiAi1tEXlcq6+rH",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUfTFmNBRM/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0XUfTFmNBRM"
          },
          {
            "collaborative": false,
            "description": "Trending songs from Tollywood! \nCover: Devara",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTt3gMo0DLxA"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTt3gMo0DLxA",
            "id": "37i9dQZF1DWTt3gMo0DLxA",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000002d5b5027669719633df499068",
                "width": null
              }
            ],
            "name": "Trending Now Telugu",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "Zu2DewAAAAAYrLDT09HryIUy23wkcJuG",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTt3gMo0DLxA/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWTt3gMo0DLxA"
          },
          {
            "collaborative": false,
            "description": "Top Trending Tamil Songs on Social Media.\nCover : GOAT",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4Im4BTs2WMg"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4Im4BTs2WMg",
            "id": "37i9dQZF1DX4Im4BTs2WMg",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000002bdcafbf525c8051cff8043ce",
                "width": null
              }
            ],
            "name": "Trending Now Tamil",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZwJfawAAAAAMY3osBiJgbaIQnAteF4c0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4Im4BTs2WMg/tracks",
              "total": 51
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4Im4BTs2WMg"
          },
          {
            "collaborative": false,
            "description": "Let these songs be the background score to your love story. Cover - Bad Newz",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdpQPPZq3F7n"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdpQPPZq3F7n",
            "id": "37i9dQZF1DXdpQPPZq3F7n",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000230f08f560d3840634ccdb227",
                "width": null
              }
            ],
            "name": "Bollywood Mush",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZvprpwAAAACYL53zt9wfvZFdBDKIwX4L",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdpQPPZq3F7n/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdpQPPZq3F7n"
          },
          {
            "collaborative": false,
            "description": "Catch the hottest Punjabi tracks. Cover - Yo Yo Honey Singh",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXVJK4aT7pmk"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXVJK4aT7pmk",
            "id": "37i9dQZF1DWXVJK4aT7pmk",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000002d8f8c9141e4efe37992a5f5c",
                "width": null
              }
            ],
            "name": "Hot Hits Punjabi",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "Zv+QtgAAAABOVvzVI6B4GUWyk8ihQuGT",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXVJK4aT7pmk/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXVJK4aT7pmk"
          },
          {
            "collaborative": false,
            "description": "Every track you're listening/should be listening to ;) Cover- Stree 2",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbVhgADFy3im"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbVhgADFy3im",
            "id": "37i9dQZF1DXbVhgADFy3im",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000022ffd7dd5695e74a352352638",
                "width": null
              }
            ],
            "name": "Trending Now India",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZwTUGAAAAACDJmhCeGjwumm7vbuuTGkR",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbVhgADFy3im/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXbVhgADFy3im"
          },
          {
            "collaborative": false,
            "description": "Party-ready, the biggest Bollywood dance tracks. Cover - Stree 2",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8xfQRRX1PDm"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8xfQRRX1PDm",
            "id": "37i9dQZF1DX8xfQRRX1PDm",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000002854da9d5ca2554a3a23af2ac",
                "width": null
              }
            ],
            "name": "Bollywood Dance Music",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZvpnTwAAAACU5q7XWCvvtN5By0ECKD6b",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8xfQRRX1PDm/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8xfQRRX1PDm"
          },
          {
            "collaborative": false,
            "description": "Bollywood songs that ruled hearts in the Y2K decade. Cover - Jab We Met",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZNJXX2UeBij"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZNJXX2UeBij",
            "id": "37i9dQZF1DWZNJXX2UeBij",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000028caea064dec323af4cb39816",
                "width": null
              }
            ],
            "name": "All Out 00's Hindi",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZpdcagAAAACmNrdL+QNFe5FYinpi8zev",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZNJXX2UeBij/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZNJXX2UeBij"
          },
          {
            "collaborative": false,
            "description": "Every song that's Trending NOW from Malayalam! \nCover: ARM",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTYKFynxp6Fs"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTYKFynxp6Fs",
            "id": "37i9dQZF1DWTYKFynxp6Fs",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000024e207fa05a6c150e6d33f238",
                "width": null
              }
            ],
            "name": "Trending Now Malayalam",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZwPJGQAAAABWI+zvk/5FClzHTtrGvL7Q",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTYKFynxp6Fs/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWTYKFynxp6Fs"
          },
          {
            "collaborative": false,
            "description": "Let your heart sing all the 90s love songs you'll ever need. Cover - Saajan",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXa6iPZDThhLh"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa6iPZDThhLh",
            "id": "37i9dQZF1DXa6iPZDThhLh",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000023a8d99f7bb5ac3931da6788d",
                "width": null
              }
            ],
            "name": "90s Love Hits",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "Zk3QMAAAAAD+S4HsSfBSaOLyhTf4ogUP",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa6iPZDThhLh/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXa6iPZDThhLh"
          },
          {
            "collaborative": false,
            "description": "Tune into the Hottest tracks of Kollywood!\nCover : Vettaiyan",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1i3hvzHpcQV"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1i3hvzHpcQV",
            "id": "37i9dQZF1DX1i3hvzHpcQV",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000246df5d841d1d109547d7647d",
                "width": null
              }
            ],
            "name": "Hot Hits Tamil",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZwOxbgAAAAB92dQ3Jzl07GkEYGSHRDzX",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1i3hvzHpcQV/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1i3hvzHpcQV"
          },
          {
            "collaborative": false,
            "description": "Bollywood Central, jab baje toh seedha dil ke centre mein lage 🫶🏼 Cover - Teri Baaton Mein Aisa Uljha Jiya",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXtlo6ENS92N"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXtlo6ENS92N",
            "id": "37i9dQZF1DWXtlo6ENS92N",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000215d9c9d2dde2b9d12ba9c41c",
                "width": null
              }
            ],
            "name": "Bollywood Central",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZvptJQAAAAANhTjzl3TS78lEcSOcNXR0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXtlo6ENS92N/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXtlo6ENS92N"
          },
          {
            "collaborative": false,
            "description": "Fall in love with 00's Bollywood like never before! Cover - Kabhi Khushi Kabhie Gham",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVq1SXCH6uFn"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVq1SXCH6uFn",
            "id": "37i9dQZF1DWVq1SXCH6uFn",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000002898b6534cd1f318991043925",
                "width": null
              }
            ],
            "name": "00's Love Hits",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "Zk3QMAAAAADEFWC20YFIBQ5AQrvtmgru",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVq1SXCH6uFn/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVq1SXCH6uFn"
          },
          {
            "collaborative": false,
            "description": "Soulful Hindi songs for your nostalgic journey. Cover - Mere Jeevan Saathi",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYRTlrhMB12D"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYRTlrhMB12D",
            "id": "37i9dQZF1DWYRTlrhMB12D",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000002ac5edc3e31371c6040cc9e87",
                "width": null
              }
            ],
            "name": "Old is Gold",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZlWcFgAAAACauvHUj014zY2en1gQbZJU",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYRTlrhMB12D/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYRTlrhMB12D"
          },
          {
            "collaborative": false,
            "description": "Bollywood crooner's essential songs.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYztMONFqfvX"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYztMONFqfvX",
            "id": "37i9dQZF1DWYztMONFqfvX",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000285c716247c24f66ef40f011e",
                "width": null
              }
            ],
            "name": "This Is Arijit Singh",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "Zv6FSwAAAABURDeOxwpLLffRODKz3PrQ",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYztMONFqfvX/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYztMONFqfvX"
          },
          {
            "collaborative": false,
            "description": "Ultimate 101 Punjabi Hits with Navaan Sandhu",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5cZuAHLNjGz"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5cZuAHLNjGz",
            "id": "37i9dQZF1DX5cZuAHLNjGz",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000021d9eb6637c00b3b85e64544b",
                "width": null
              }
            ],
            "name": "Punjabi 101",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#FFFFFf",
            "public": true,
            "snapshot_id": "Zv910AAAAADD7ZxmpTmmqO4FWp4pFwQx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5cZuAHLNjGz/tracks",
              "total": 101
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5cZuAHLNjGz"
          },
          {
            "collaborative": false,
            "description": "the beat of your drift",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWY64wDtewQt"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWY64wDtewQt",
            "id": "37i9dQZF1DWWY64wDtewQt",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000027dc5028b26eb62f22d31bb1f",
                "width": null
              }
            ],
            "name": "phonk",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "Zv/rdQAAAABKtkEx0tcn+VxcMrtB3yQ/",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWY64wDtewQt/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWY64wDtewQt"
          },
          {
            "collaborative": false,
            "description": "Soulful tunes for the heart that has loved and lost. Cover - Tamasha",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdFesNN9TzXT"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdFesNN9TzXT",
            "id": "37i9dQZF1DXdFesNN9TzXT",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000257bf14022a44fcd3a6dbd06b",
                "width": null
              }
            ],
            "name": "Sad Hindi Melodies",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "Zv/QJAAAAACrjI+UvdBue1r2YyQ3MR61",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdFesNN9TzXT/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdFesNN9TzXT"
          },
          {
            "collaborative": false,
            "description": "Worship the Goddess of love and devotion with these blessed tunes.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXw5zio80eKE"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXw5zio80eKE",
            "id": "37i9dQZF1DWXw5zio80eKE",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000282217b8b025db26e327c0f8b",
                "width": null
              }
            ],
            "name": "Mata Ka Darbaar",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZwUEPAAAAABo20lzBdZzDwP3X9Epslxw",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXw5zio80eKE/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXw5zio80eKE"
          },
          {
            "collaborative": false,
            "description": "'Mushkil Hai' to avoid the new song of Vicky Vidya Ka Woh Wala Video. Listen now.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXd8cOUiye1o2"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXd8cOUiye1o2",
            "id": "37i9dQZF1DXd8cOUiye1o2",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000025d84ed7a29492264ce076577",
                "width": null
              }
            ],
            "name": "New Music Hindi",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": "#ffffff",
            "public": true,
            "snapshot_id": "ZwT3IgAAAAChtPAtCVlRuIEIe8MdGJYh",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXd8cOUiye1o2/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXd8cOUiye1o2"
          },
    ]

    return (
        <div className='search_suggestions_container' >
            <h3>Browse Top Playlists</h3>
            <div className='suggestion_albums_container' >
                {
                    data.map((data, index) => {
                        return (
                            <Link to={`/playlist/${data.id}`} className='suggestion_album' >
                                <img src={`${data.images[0].url}`} /> 
                                <p>{data.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BrowseSection