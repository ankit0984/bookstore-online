module.exports={
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              pathname: '/bucket-206/image/upload/**'
            },
          ],
    },
    experimental: {
      serverActions: true,
    },
}