import DateTime from "./DateTime"
import DateTimePretty from "./DateTimePretty"


function Video(props) {
  const DateTimeFormatted = DateTimePretty(DateTime, props)

  return (
    <div className="video">
        <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <DateTimeFormatted />
    </div>
)
}

export default Video