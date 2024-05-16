{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/"
        }
    ]
}

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

{
    "builds": [
      {
        "src": "./server.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "/"
      }
    ]
  }

  {
  "rewrites": [
    {
      "source": "/socket.io/(.*)",
      "destination": "https://chat-foro-enycosmic.vercel.app/socket.io/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}

{
  "builds": [
    {
      "src": "./server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    { "src": "/public/(.*)", "dest": "/public/$1" },
    { "src": "/(.*)", "dest": "/" }
  ]
}

