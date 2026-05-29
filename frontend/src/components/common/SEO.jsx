import { Helmet } from 'react-helmet-async'

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  author = 'Santrix E-Tuitions'
}) => (
  <Helmet>
    <title>{title} | Santrix E-Tuitions</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    {image && <meta property="og:image" content={image} />}
    {url && <meta property="og:url" content={url} />}
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}
    
    {url && <link rel="canonical" href={url} />}
  </Helmet>
)
