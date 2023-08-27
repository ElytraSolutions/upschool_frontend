 import React, { useRef } from 'react';
 import { Editor as TinyMCEEditor } from 'tinymce';
 import { Editor } from '@tinymce/tinymce-react';

 export default function Test() {
   const editorRef = useRef<TinyMCEEditor | null>(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   return (
     <>
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>This is the initial content of the editor.</p>"
          tinymceScriptSrc="/tinymce/tinymce/js/tinymce/tinymce.min.js"
         init={{
           height: 500,
           menubar: true,
           plugins: [
             'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'print', 'preview', 'anchor',
             'searchreplace', 'visualblocks', 'code', 'fullscreen',
             'insertdatetime', 'media', 'table', 'paste', 'code', 'help', 'wordcount'
           ],
           toolbar: 'undo redo | fontsize formatselect | ' +
           'bold italic backcolor lineheight | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
           line_height_formats: '1 1.2 1.4 1.6 2',
         }}
       />
       <button onClick={log}>Log editor content</button>
     </>
   );
 }
