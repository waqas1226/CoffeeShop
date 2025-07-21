import { useEffect } from 'react';

const FacebookPost = () => {
//   useEffect(() => {
//     if (!window.FB) {
//       const script = document.createElement('script');
//       script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
//       script.async = true;
//       script.defer = true;
//       script.crossOrigin = "anonymous";
//       script.onload = () => window.FB && window.FB.XFBML.parse();
//       document.body.appendChild(script);
//     } else {
//       window.FB.XFBML.parse();
//     }
//   }, []);

  return (
    <div className="my-4">
      <div
        className="fb-post"
        // data-href="https://www.facebook.com/facebook/posts/10153231379946729"
        data-width="500">
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FMadaniChannelOfficial%2Fposts%2Fpfbid0s2mMnPegE9bEdaETYrisR5TFq4S84iGqDM8ReJTMzBksDTjLZ7eAyLnmDpL5ihYgl&show_text=true&width=500" width="500" height="610"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  );
};

export default FacebookPost;
