
import React from 'react'
import PageWrapper from 'components/PageWrapper'
import * as PastExam from 'components/PastExam'

const Upload = () => (
  <PageWrapper>
    <div className='container bg-white p-4'>
      <h5>Step1.選擇適用課程 - <span className='text-center' /></h5>
      <div className='input-group my-5'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>適用課程</span>
        </div>
        <input className='form-control' placeholder='搜尋課名（交大專用）' />
        <span className='input-group-append'>
          <button className='btn btn-outline-secondary'>搜尋</button>
        </span>
      </div>
      <hr />
      <h5>Step2.上傳檔案及填寫說明</h5>
      <PastExam.FileList />
      <hr />
      <PastExam.Upload disabled />
    </div>
  </PageWrapper>
)

export default Upload