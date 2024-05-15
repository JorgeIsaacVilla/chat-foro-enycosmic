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