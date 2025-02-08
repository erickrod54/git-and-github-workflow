import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs'; // You'll need to have Prism.js installed

// Import the language-specific syntax highlighting styles
import 'prismjs/components/prism-cshtml';
import { clipboard } from '../assets/index.assets';
import styled from 'styled-components';


/**git-and-github-workflow  - version 3.13 - BashCode
 * - Features: 
 * 
 *     --> Incresing explicitly font size for 
 *          'token.cdata', and 'token.function'  
 * 
 * Note: to modify font sizes inspect the element, 
 * look for the font color and set a font size:
 * 
 *    token.function --> color:#f08d49
 * 
 * this way can be highly custom
 */

const Okadia = styled.div`
 code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:3rem;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999; font-size:1rem}.token.punctuation{color:#ccc; font-size:3rem;}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49; font-size:2.2rem}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555; font-size:2.2rem}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699; font-size:3rem;}.token.entity,.token.operator,.token.url{color:#67cdcc; font-size:3rem}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}
`
const BashCode = ({ code }) => {
    const codeRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, []);

    const copyToClipboard = () => {
        if (codeRef && codeRef.current) {
            navigator.clipboard.writeText(codeRef.current.textContent)
                .then(() => {
                    console.log('Code copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy:', err);
                });
        }
    };

    return (
        <Okadia>
            <div className='sm:w-66 relative'>
                {/* Clipboard Button */}
                <button 
                    onClick={copyToClipboard} 
                    className='absolute top-2 right-2 p-2 rounded-md bg-gray-800 hover:bg-green-300 duration-200'
                >
                    <img 
                        src={clipboard} 
                        alt='clipboard' 
                        className='w-6 h-6' 
                    />
                </button>

                {/* Code Block */}
                <pre className="p-4 rounded-lg bg-gray-900">
                    <code ref={codeRef} className="lang-js">
                        {code}
                    </code>
                </pre>
            </div>
        </Okadia>
    );
};

export default BashCode;
