import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-cshtml';
import styled from 'styled-components';

/**Portfolio-erick - version 8.02 - BashCode -
* Features:

    --> Keeping just one copy command button

* Notes: Migrating styled components, has been lifted\
* to single command
**/

const Okadia = styled.div`
 code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:3rem;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999; font-size:1rem}.token.punctuation{color:#ccc; font-size:3rem;}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49; font-size:2.2rem}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555; font-size:2.2rem}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699; font-size:3rem;}.token.entity,.token.operator,.token.url{color:#67cdcc; font-size:3rem}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}
`

const BashCode = ({ code }) => {
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, [code]); // Re-highlight if the code changes

    return (
        <Okadia>
            <div className='sm:w-66 relative'>
                {/* Clean onClick call */}
                <pre className="p-4 rounded-lg bg-gray-900">
                    <code className="lang-js">
                        {code}
                    </code>
                </pre>
            </div>
        </Okadia>
    );
};

export default BashCode;
