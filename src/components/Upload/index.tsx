import React from 'react'
import Button from '../button'
import classnames from 'classnames'
import './main.less'

export interface UploadProps {
    files: FileList
    onChange: (e: React.ChangeEvent | React.DragEvent, files: FileList) => void
    dragable: boolean
}

export interface UploadState {
    fileList: FileList
}

export default class extends React.Component<UploadProps, UploadState> {

    static getDerivedStateFromProps (nextPorps: UploadProps) {
        if ('files' in nextPorps) {
            return {
                fileList: nextPorps.files,
            }
        }
        return null
      }
    
      constructor (props: UploadProps) {
        super(props)
        this.state = {}
      }
    handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    handleClick = () => {
        this.input.click()
    }

    handleChange = (e: React.ChangeEvent) => {
        const files = this.input.files
        const { onChange } = this.props
        if (files) {
            onChange && onChange(e, files)
        }
    }

    input: HTMLInputElement
    saveInput = (node: HTMLInputElement) => {
      this.input = node
    }

    handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const files = e.dataTransfer.files
        const { onChange } = this.props
        if (files) {
            onChange && onChange(e, files)
        }
    }

    renderFileList () {
        if (this.state && this.state.fileList) {
            return Array.from(this.state.fileList).map((file, key) => {
                return (
                    <div className={classnames('ql-filelist-item')} key={key}>{file.name}</div>
                )
            })
        } else {
            return null
        }
    }

    renderMethod () {
        const { dragable } = this.props
        if (dragable) {
            return (
                <div
                    className={classnames('ql-upload-drop')}
                    onClick={this.handleClick}
                    onDragOver={(e) => {this.handleDragOver(e)}}
                    onDrop={(e) => {this.handleDrop(e)}}>
                    拖拽到此处上传
                </div>
            )
        } else {
            return (
                <Button type={'primary'} text={'选择文件'} onClick={this.handleClick}></Button>
            )
        }
    }

    render () {
        return (
            <div>
                <input type="file"
                multiple={true}
                style={{display: 'none'}}
                onChange={this.handleChange}
                ref={this.saveInput}/>
                {this.renderMethod()}
                <div className={classnames('ql-filelist')}>{this.renderFileList()}</div>
            </div>
        )
    }
}