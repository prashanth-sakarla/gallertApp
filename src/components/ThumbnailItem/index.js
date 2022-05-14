// Write your code here.

import './index.css'

const ThumbnailItem = () => {
  const {imageDetails} = props
  const {imageUrl, thumbnailAltText} = imageDetails
  return (
    <li>
      <img alt={thumbnailAltText} className="image-icon" src={imageUrl} />
    </li>
  )
}

export default ThumbnailItem
