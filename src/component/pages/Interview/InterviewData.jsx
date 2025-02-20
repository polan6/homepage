
export const interviewDataList={
	"React":{
		header:`
以下のReactの技術面接の質問集(英語)を日本語に翻訳した文書を作成した。翻訳後の文書をこのページでも公開する。

翻訳元

https://github.com/sudheerj/reactjs-interview-questions

翻訳後(現在翻訳中)

https://github.com/polan6/reactjs-interview-questions-japanese



`,
		questions:[
			{
				id:1,
				q:"Reactとは何か？",
				a:`
  React（別名React.jsまたはReactJS）は、**オープンソースのフロントエンドJavaScriptライブラリ**であり、特にシングルページのアプリケーション向けに、コンポーザブルなユーザーインターフェイスを構築するために使用される。Reactは、宣言的なアプローチでコンポーネントに基づくウェブやモバイルアプリのビューレイヤーを処理するために使用される。

  Reactは、Facebookで働くソフトウェアエンジニアの[Jordan Walke](https://github.com/jordwalke)によって作られた。Reactは2011年にFacebookのニュースフィードに、2012年にはInstagramに初めて導入された。`
			},
			{
				id:2,
				q:"Reactの進化の背後にある歴史は？",
				a:`
  ReactJSの歴史は、2010年の**XHP**の作成から始まった。XHPはPHPの拡張機能で、XML文書の断片が有効なPHP式になるように構文を改良したものだ。主な目的は、カスタムで再利用可能なHTML要素を作成することだった。

  この拡張の主な目的は、フロントエンドのコードをわかりやすくし、 クロスサイトスクリプティング攻撃を回避することでした。このプロジェクトは、スクラブユーザーによって送信された悪意のあるコンテンツを防ぐことに成功した。

  しかし、動的なウェブアプリケーションはサーバーへの多くのラウンドトリップを必要とするというXHPとは異なる問題があり、XHPはこの問題を解決することができませんでした。また、アプリケーションを少し変更するだけで、UI全体が再レンダリングされていた。その後、XHPから着想を得たJordanによって、Reactの最初のプロトタイプが**FaxJ**という名前で作成された。それからしばらくして、ReactはJavaScriptの世界に新しいライブラリとして導入された。
`
			},
			{
				id:3,
				q:"Reactの主な特徴は？",
				a:`
Reactの主な特徴は以下の通り：

- **JSX**構文を使用する。これはJSの構文を拡張したもので、開発者はJSコードにHTMLを記述することができる。
- Real DOMの操作がexpensiveであることを考慮し、Real DOMの代わりに**Virtual DOM**を使用する。
- 検索エンジン最適化（SEO）に便利な**サーバーサイド・レンダリング**をサポートしています。
- **一方向**のデータフローやデータバインディングに従います。
- ビューを開発するために**再利用可能な/構成可能な**UIコンポーネントを使用します。
`
			},
			{
				id:4,
				q:"JSXとは何か？",
				a:`
_JSX_は_JavaScript XML_の略で、ECMAScriptのXMLライクな構文拡張です。基本的には、\`React.createElement(type, props, ...children)\` 関数のための糖衣構文を提供するだけで、HTMLのようなテンプレート構文とともにJavaScriptの表現力を与えてくれます。

以下の例では、\`<h1>\`タグの中のテキストがJavaScriptの関数としてrender関数に返されます。

\`\`\`jsx harmony
export default function App() {
	return <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>;
}
\`\`\`

JSX構文を使用しない場合は、それぞれのJavaScriptコードを以下のように記述します、

\`\`\`javascript
import { createElement } from "react";

export default function App() {
	return createElement(
		"h1",
		{ className: "greeting" },
		"Hello, this is a JSX Code!"
	);
}
\`\`\`

<details><summary><b>クラスを見る</b></summary>
<p>

\`\`\`jsx harmony
class App extends React.Component {
	render() {
		return <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>;
	}
}
\`\`\`

</p>
</details>

**注記:** JSXはHTMLより厳格である

`
			},
			{
				id:5,
				q:"",
				a:`

`
			},
			{
				id:6,
				q:"",
				a:`

`
			},
		],
		sections:[
			{id:0,title:"Reactの核"},
			{id:3,title:"テスト"}
		]
	}
}

/////////////////
