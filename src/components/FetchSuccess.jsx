/* eslint-disable react/prop-types */
import useJsonFetch from "../hooks/useJsonFetch";

const FetchSuccess = ({url, opts}) => {
  
  const [data, loading, error] = useJsonFetch(url, opts[0]);

  return (
    <div className="success component">
      {data && <div>Success response: status: {data.status}</div>}
      {error && <div>Error: {JSON.stringify(error)}</div>}
      {loading && <div>Loading is on progress</div>}
    </div>
  )
}

export default FetchSuccess