export default function sitemap(){
  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL_BASE}/es`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL_BASE}/en`,
      lastModified: new Date()
    }
  ];
}
