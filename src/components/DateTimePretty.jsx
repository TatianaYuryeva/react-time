import React from "react"
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/ru'

dayjs.locale('ru')
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

function DateTimePretty(Component, props) {

  return class extends React.Component {
    render() {

      return <Component date={dayjs(props.date).fromNow()}/>
    }
  }
}

export default DateTimePretty