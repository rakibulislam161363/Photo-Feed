const photos = [
    {
      id: "94a7e01b-8576-4d18-8b84-6ae588db02d9",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=53",
        name: "Alex B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "de05d078-6f6d-4272-a08f-5a805a23aba4",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1766893304092-ba92d95aa779?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=54",
        name: "Brian Xelo",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "8265198d-e2e1-4221-addc-8244f39fdd62",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1767277672167-18105701959b?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=55",
        name: "Ceza Des",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "6cf6c10d-8ba8-46d7-b246-0e1fd5e270df",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1767199289302-75f17d64b55d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=56",
        name: "Karim Bulletin",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "a7f14fb2-9b2d-43bb-98af-6c70158e9c55",
      title: "The White Warmth",
      url: "https://images.unsplash.com/photo-1767250752271-d221bac8a9a9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "flower", "green"],
      views: "6M",
      share: "2.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=57",
        name: "Madan PA",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 120
      },
      likes: 80
    },
    {
      id: "6bea51c4-1123-425f-90c9-9148724872e5",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1766963031469-0f52e1ab417a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=58",
        name: "Moina Lam",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "02983ddd-338d-4382-b0c8-316caa21b4a5",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1767021473433-37971b41d9cd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=59",
        name: "Nat B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "552f7d8d-d9eb-4edc-98a9-cec20c90d90c",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1764083029040-a803c4924d5b?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=60",
        name: "Taral X",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1764957080224-3e560f1cb107?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=61",
        name: "Zhoom B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "9761a3ea-2c2c-4b6e-a618-a6e4d26cf729",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1766911292001-119c76c1ef3e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=62",
        name: "T Manhattan",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "154ca3f8-07ec-464f-9eac-6775ec37bba1",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1766059965561-e0e2a892031a?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=63",
        name: "Abhinash Chahal",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "9e396ae7-9ae4-4fec-86e3-4fc52c73b73a",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1766858667597-a9ba9d49473a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=64",
        name: "Cyrun X",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "ddd5975e-d728-4e68-98d1-3b961ab9c18e",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1766767673683-168676b97f4c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=65",
        name: "Matas Currian",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 420
      },
      likes: 100
    },
    {
      id: "dcbada31-fa30-4c25-9721-b46b1e6a8d6f",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1766703673131-f845ee5e754c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=66",
        name: "Somani Dal",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "f536658e-a274-431f-843d-34116dcc1b7e",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1766518744550-82f2c1bcc189?q=80&w=370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=67",
        name: "Tom Holla",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    }
  ];

  const photoFilter = (photos) => {
    return photos.map((photo) => ({
        id: photo.id,
        title: photo.title,
        url: photo.url
    }))
  }
  const getAllPhotos = () => {
    return photoFilter(photos)
  }

  const getPhotoById = (id) => {
    return photos.find(photo => photo.id === id);
  }

  export {
    getAllPhotos,
    getPhotoById
  }