import React, { useEffect, useState } from 'react'
import "./Interview.css"
import { MakeSheet,MakeTable  } from './InterviewLogic';
import { interviewDataList} from './InterviewData'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const Interview = () => {

	const [interviewData,setInterviewData]=useState(interviewDataList.React)
	return (
		<div className='interview__content'>
			<h1>面接質問集</h1>
			<p>
				技術面接の質問集をこのページに記載する。現在はReactしかないが、今後他のテーマについても記載する予定である。
			</p>
			<ReactMarkdown remarkPlugins={remarkGfm}>
				{interviewData.header}
			</ReactMarkdown>
			<h2>目次</h2>
			<MakeTable data={interviewData}/>
			<MakeSheet data={interviewData}/>
			{/* {makeSheet(interviewData)} */}
		</div>
	)
}

export default Interview