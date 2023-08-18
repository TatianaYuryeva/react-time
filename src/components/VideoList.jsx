import { nanoid } from 'nanoid'

import Video from './Video';

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} key={nanoid()}/>);
}

export default VideoList