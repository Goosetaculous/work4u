import DropzoneS3Uploader from 'react-dropzone-s3-uploader'
import React , { Component } from 'react';


class S3Uploader extends React.Component {
 
  handleFinishedUpload = info => {
    console.log('File uploaded with filename', info.filename)
    console.log('Access it on s3 at', info.fileUrl)
  }
 
  render() {
    const uploadOptions = {
      server: 'http://localhost:3000',
      signingUrlQueryParams: {uploadType: 'avatar'},
    }
    const s3Url = 'https://work4u.s3.amazonaws.com'
 
    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
    )
  }
}


export default S3Uploader;