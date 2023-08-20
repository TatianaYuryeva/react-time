import { nanoid } from 'nanoid'

import Video from './Video';

function VideoList(props) {
  return props.list.map(item => <Video {...item} key={nanoid()}/>);
}

export default VideoList