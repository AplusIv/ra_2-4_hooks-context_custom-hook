/* eslint-disable react/prop-types */
import useJsonFetch from '../hooks/useJsonFetch';

const FetchLoading = ({url, opts}) => {
  // const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');
  const [data, loading, error] = useJsonFetch(url, opts[1]);


  return (
    <div className="loading component">
      {data && <div>Success response: status: {data.status}</div>}
      {error && <div>Error: {JSON.stringify(error)}</div>}
      {loading && <div>Loading is on progress</div>}
    </div>
  )
}

export default FetchLoading