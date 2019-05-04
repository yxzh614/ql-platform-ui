import React from 'react'
import './Progress.less'
export interface ProgressProps {
  max: number;
  progress: number;
}
export default function (props: ProgressProps) {
  if ('progress' in props) {

    const progress = Math.floor(props.progress * 100)

    const style: any = {
      width: progress + '%'
    }
    return (
      <div>
        <div style={{width: '200px'}} className={'ql-progress-warper'}>
          <div style={style} className={'ql-progress-inner'}>
            <span className={'ql-progress-text'}>{progress}%</span>
          </div>
        </div>
      </div>
    )
  } else {
    throw new Error('prop(s) needed: progress')
  }
}