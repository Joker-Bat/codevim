import React from "react";

function TextArea(props) {
    return (
        
        <textarea id="message" rows="4" className="block mr-1 resize-none p-2.5 w-full text-sm text-gray-900 bg-zinc-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>

    )
}

export default TextArea;