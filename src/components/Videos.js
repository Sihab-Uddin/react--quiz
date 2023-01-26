import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, haseMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={haseMore}
          next={() => setPage(page + 8)}
        >
          {videos.map((video) => (
            <Link to="/quiz" key={video.youtubeID}>
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            </Link>
          ))}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && (
        <div>
          <h1>Data Not Found</h1>
        </div>
      )}
      {error && (
        <div>
          <h1>There was an Error</h1>
        </div>
      )}
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}
