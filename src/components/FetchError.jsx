/* eslint-disable react/prop-types */
import useJsonFetch from "../hooks/useJsonFetch";

const FetchError = ({url, opts}) => {
  const [data, loading, error] = useJsonFetch(url, opts[2]);

  return (
    <div className="error component">
      {data && <div>Success response: status: {data.status}</div>}
      {error && <div>Error: {JSON.stringify(error)}</div>}
      {loading && <div>Loading is on progress</div>}
    </div>
  )
}

export default FetchError