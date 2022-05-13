import React from 'react'
import ContentLoader from 'react-content-loader';
function Loading() {
    return(
        <ContentLoader 
          speed={2}
          width={280}
          height={500}
          viewBox="0 0 280 500"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
         
        >
          <circle cx="130" cy="130" r="130" /> 
          <rect x="1" y="301" rx="3" ry="3" width="270" height="25" /> 
          <rect x="0" y="350" rx="6" ry="6" width="272" height="83" /> 
          <rect x="0" y="455" rx="0" ry="0" width="89" height="27" /> 
          <rect x="120" y="456" rx="0" ry="0" width="151" height="30" />
        </ContentLoader>)
}

export default Loading