import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  AutoImage,
  AutoLink,
  Autosave,
  Bold,
  CloudServices,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  ImageBlock,
  ImageInsertViaUrl,
  ImageResize,
  ImageToolbar,
  ImageUpload,
  Italic,
  Link,
  Paragraph,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

import "./App.css";

/**
 * Create a free account with a trial: https://portal.ckeditor.com/checkout?plan=free
 */
const LICENSE_KEY = "GPL"; // or <YOUR_LICENSE_KEY>.

export default function RTEditor({ emailObj, setEmailObj }) {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEmailObj({ ...emailObj, html: data });
  };

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useMemo(() => {
    if (!isLayoutReady) {
      return {};
    }

    return {
      editorConfig: {
        toolbar: {
        zIndexOffset: 1500, // Adjust this based on your dialog's z-index

          items: [
            "fontSize",
            "fontFamily",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "|",
            "link",
          ],
          shouldNotGroupWhenFull: false,
        },
        
        plugins: [
          AutoImage,
          AutoLink,
          Autosave,
          Bold,
          CloudServices,
          Essentials,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          ImageBlock,
          ImageInsertViaUrl,
          ImageResize,
          ImageToolbar,
          ImageUpload,
          Italic,
          Link,
          Paragraph,
        ],
        fontFamily: {
          supportAllValues: true,
        },
        fontSize: {
          options: [10, 12, 14, "default", 18, 20, 22],
          supportAllValues: true,
        },
        image: {
          toolbar: ["imageTextAlternative", "|", "resizeImage"],
        },
        initialData: emailObj.html,
        licenseKey: LICENSE_KEY,
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          decorators: {
            toggleDownloadable: {
              mode: "manual",
              label: "Downloadable",
              attributes: {
                download: "file",
              },
            },
          },
        },
        placeholder: "Type or paste your content here!",
      },
    };
  }, [isLayoutReady]);

  return (
    <div className="main-container">
      <div
        className="editor-container editor-container_classic-editor"
        ref={editorContainerRef}
      >
        <div className="editor-container__editor">
          <div ref={editorRef}>
            {editorConfig && (
              <CKEditor
                data={emailObj.html}
                id={"editorId"}
                editor={ClassicEditor}
                config={editorConfig}
                onChange={handleEditorChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
