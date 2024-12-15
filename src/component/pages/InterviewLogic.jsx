
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from "rehype-raw";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const CodeBlock = ({ inline, className, children, }) => {
    if (inline) {
        return <code className={className}>{children}</code>;
    }
 
    const match = /language-(\w+)/.exec(className || '');
    if (!match) {
        return <code className={className}>{children}</code>;
    }
 
    const lang = match && match[1] ? match[1] : '';
 
    return (
        <SyntaxHighlighter
            style={atomDark}
            language={lang}
        >
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    );
}
//https://blog.designly.biz/react-markdown-how-to-create-a-copy-code-button
const CodeCopyBtn=({ children })=>{
	const [copyOk, setCopyOk] = useState(false);

	const iconColor = copyOk ? '#0af20a' : '#808080';
	const icon = copyOk ? faSquareCheck : faCopy;

	const handleClick = (e) => {
		// console.log(children.props.children)
		navigator.clipboard.writeText(children.props.children);
		// console.log(children)

		setCopyOk(true);
		setTimeout(() => {
				setCopyOk(false);
		}, 5000);
	}

	return (
			<div className="code-copy-btn">
					<FontAwesomeIcon icon={icon} onClick={handleClick} style={{color: iconColor}} />
			</div>
	)
}

const Pre=({ children }) => <pre className="pre">
<CodeCopyBtn>{children}</CodeCopyBtn>
{children}
</pre>


/////////////

const insertSection=(data/* sections and questions*/)=>{
	const ret=[...data.questions]
	// console.log(1)
	//そのsectionで指定されたidを持つ問の後にそのsectionが挿入される
	for (let i = 0; i < data.sections.length; i++) {
		const insertPosition=data.questions.findIndex(element=>element.id===data.sections[i].id+1)
		ret.splice(insertPosition,0,{title:data.sections[i].title,id:`§${i+1}`})
	}
	return ret
}


export const MakeTable=({data}/* sections and questions*/)=>{
	const questionWithSection=insertSection(data)
	// console.log(questionWithSection)
	return(
		<table className='interview__table'>
			<thead>
				<tr>
					<th scope="col">No.</th>
					<th scope="col">質問</th>
				</tr>
			</thead>
			<tbody>
				{questionWithSection.map(elem=>
					<tr key={`table-${elem.id}`}>
					{elem.title?(
						<>
							<th scope="row">{elem.id}</th>
							<td><b>{elem.title}</b></td>
						</>
					):(
						<>
							<th scope="row">{elem.id}</th>
							<td>{elem.q}</td>
						</>
					)}
					</tr>

				)}

			</tbody>
		</table>
	)
}

export const MakeSheet=({data})=>{
	const questionWithSection=insertSection(data)
	// console.log(questionWithSection)
	return(
		<div className='interview__sheet'>

				{questionWithSection.map(elem=>
					<div key={`sheet-${elem.id}`}>
					{elem.title?(
						<h2>{elem.id} {elem.title}</h2>
					):(
						<>
							<h3>{elem.id}.{elem.q}</h3>
							<details><summary><b>答えを表示/非表示</b></summary>
								<div className='interview__text'>
									<ReactMarkdown remarkPlugins={remarkGfm} rehypePlugins={[rehypeRaw]}
									components={{pre:Pre,code:CodeBlock}}>
										{elem.a}
									</ReactMarkdown>
								</div>
							</details>
						</>
					)}
					</div>
				)}
		</div>
	)
}
